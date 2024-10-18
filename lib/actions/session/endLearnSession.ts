'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'
import { NewSentenceProps, ReviewResultDocument } from '@/types/review.types'
import { updateUserWords } from '../words/updateUserWords'
import { saveSentences } from '../sentences/saveSentences'
import { AppError } from '@/lib/errors/AppError'
import { revalidatePath } from 'next/cache'
import { updateLatestWord } from '../users/updateLatestWord'

interface EndLearnSessionProps {
  userId: string // coming from client-side component must be string
  finishedWords?: ReviewResultDocument[]
  userLatestWord?: number
}

// This function is used to end the learning session and also to update UserWords / Sentences
export async function endLearnSession({
  userId,
  finishedWords,
  userLatestWord
}: EndLearnSessionProps) {

  try {
    let userIdObj: mongoose.Types.ObjectId
    // Check id and convert string to ObjectId
    if (userId) {
      userIdObj = new mongoose.Types.ObjectId(userId)
    } else {
      throw new AppError(400, 'Invalid user Id.')
    }

    // Part 1: If endLearnSession includes finishedWords from state, update DB with UserWords and new sentences,
    // and new latest word value to the users collection
    if (finishedWords && finishedWords.length > 0) {
      const promises = []
      promises.push(
        updateUserWords({
          userId: userIdObj,
          reviewResults: finishedWords
        })
      )
     
      // Prepare sentence save
      const sentencesToSave = finishedWords.flatMap(
        word =>
          word.newSentencesArray?.map((sentence: NewSentenceProps) => ({
            wordId: word.wordId,
            ...sentence
          })) || [] // empty array if no content in newSentencesArray
      )

      promises.push(
        saveSentences({
          newSentences: sentencesToSave
        })
      )

      // Get the highest word number in the finishedWords array
      const highestWordNumber = finishedWords.reduce((max, word) => {
        return word.wordNumber > max ? word.wordNumber : max
      }, 0)
      // newLatestWord updates from the max of finishedWords array or the previous latestWord from state
      promises.push(
        updateLatestWord({
          newLatestWord: Math.max(highestWordNumber, userLatestWord),
          userId: userIdObj
        })
      )
      await Promise.all(promises)
    }

    // Part 2: End the user's session - Update all active sessions for the user (in case there are more)
    const result = await Session.updateMany(
      { userId: userIdObj, isActive: true }, // Query to find all active sessions
      { $set: { isActive: false, endedAt: new Date() } } // Update fields
    )

    // If no sessions were updated, return an error
    if (result.matchedCount === 0) {
      console.log('No active sessions: ', result.matchedCount)
      return {
        code: 404,
        message: `No active session for user ${userId}`
      }
    }

    // Required to update cache
    revalidatePath('/learn', 'page')

    return {
      code: 200,
      message: `Session successfully ended for user ${userId}`
    }
  } catch (error) {
    console.error('Error ending the session:', error)
    if (error instanceof AppError) {
      return {
        code: error.code,
        error: error.message
      }
    }

    // Generic errors
    return {
      code: 500,
      error: `An unexpected error occurred while ending the session: ${error.message}`
    }
  }
}
