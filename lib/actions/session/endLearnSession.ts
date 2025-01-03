'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'
import { NewSentenceProps, ReviewResultDocument } from '@/types/review.types'
import { updateUserWords } from '../words/updateUserWords'
import { saveSentences } from '../sentences/saveSentences'
import { AppError } from '@/lib/errors/AppError'
import { revalidatePath } from 'next/cache'
import { updateUserStats } from '../stats/updateUserStats'
import { updateUser } from '../users/updateUser'

/* 
This function is used to end the learning session and also to update UserWords / Sentences
It performs a number of updates in part 1:
  A. updateUserWords with results of the review session
  B. saveSentences to add any newly generated sentences to the db
  C. updates UserStats collection with daily view count
  D. updates the user's latestWord + preferredChars if necessary
It also ends a user's session in the dB in part 2
*/

interface EndLearnSessionProps {
  userId: string // coming from client-side component must be string
  finishedWords?: ReviewResultDocument[]
  latestWord?: number
  characterState?: 'simplified' | 'traditional'
  preferredChars?: 'simplified' | 'traditional'
  startTime?: number
}

export async function endLearnSession({
  userId,
  finishedWords,
  latestWord,
  characterState = 'traditional',
  preferredChars = 'traditional',
  startTime
}: EndLearnSessionProps) {
  try {
    // Check id and convert string to ObjectId
    let userIdObj: mongoose.Types.ObjectId
    if (userId) {
      userIdObj = new mongoose.Types.ObjectId(userId)
    } else {
      throw new AppError(400, 'Invalid user Id.')
    }

    // A: If endLearnSession includes finishedWords from state
    if (finishedWords && finishedWords.length > 0) {
      const promises = []
      promises.push(
        updateUserWords({
          userId: userIdObj,
          reviewResults: finishedWords
        })
      )

      // B: Prepare sentences to save
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

      // C: Update UserStats collection:
      // TODO: Use duration stored in database for stats in the future
      promises.push(
        updateUserStats({
          userId: userIdObj,
          sessionViewCount: finishedWords.length,
          sessionStartTime: startTime
        })
      )

      // D: updateUser conditional updates latestWord & preferredChars if they have changed
      promises.push(
        updateUser({
          userId,
          latestWord,
          finishedWords,
          characterState,
          preferredChars
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
