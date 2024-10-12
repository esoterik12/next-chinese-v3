'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'
import { ReviewResultDocument } from '@/types/review.types'
import { updateUserWords } from '../updateUserWords'
import { SaveSentenceProps, saveSentences } from '../sentences/saveSentences'
import { AppError } from '@/lib/errors/AppError'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
const revalidate = 0
const dynamic = 'force-dynamic'

interface EndLearnSessionProps {
  userId: string // coming from client-side component must be string
  finishedWords?: ReviewResultDocument[]
}

// This function is used to end the learning session and also to update UserWords / Sentences
export async function endLearnSession({
  userId,
  finishedWords
}: EndLearnSessionProps) {
  try {
    console.log('-----Starting endLearnSession.ts-----')
    let userIdObj: mongoose.Types.ObjectId
    // Check id and convert string to ObjectId
    if (userId) {
      userIdObj = new mongoose.Types.ObjectId(userId)
    } else {
      throw new AppError(400, 'Invalid user Id.')
    }

    // Part 1: If endLearnSession includes finishedWords from state, update DB with UserWords and new sentences
    if (finishedWords && finishedWords.length > 0) {
      console.log('A. finishedWords promises started.')
      const promises = []
      promises.push(
        updateUserWords({
          userId: userIdObj,
          reviewResults: finishedWords
        })
      )
      const sentencesToSave = finishedWords.flatMap(
        word =>
          word.newSentencesArray?.map(sentence => ({
            wordId: word.wordId,
            ...sentence
          })) || [] // empty array if no content in newSentencesArray
      )
      promises.push(
        saveSentences({
          newSentences: sentencesToSave
        })
      )
      console.log('Saving userwords and sentences in endLearnSession.ts')
      await Promise.all(promises)
    }

    // Part 2: End the user's session
    // Update all active sessions for the user
    const result = await Session.updateMany(
      { userId: userIdObj, isActive: true }, // Query to find all active sessions
      { $set: { isActive: false, endedAt: new Date() } } // Update fields
    )
    console.log('SESSION DELETE MANY', result)

    // If no sessions were updated, return an error
    if (result.matchedCount === 0) {
      console.log('No active sessions: ', result.matchedCount)
      return {
        code: 404,
        message: `No active session for user ${userId}`
      }
    }

    // TODO: this needs to be changed to learn eventually
    console.log('revalidating path')
    revalidatePath('/', 'page')

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
