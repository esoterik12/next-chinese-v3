'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'
import { ReviewResultDocument } from '@/types/review.types'
import { updateUserWords } from '../updateUserWords'

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
    // Convert string to ObjectId
    const userIdObj = new mongoose.Types.ObjectId(userId)

    // If endLearnSession includes finishedWords from state, update DB
    if (finishedWords && finishedWords.length > 0) {
      const updateWordsResult = await updateUserWords({
        userId: userIdObj,
        reviewResults: finishedWords
      })
      console.log('updateWordsResult', updateWordsResult)
    }

    // DISABLED SESSION LOGIC FOR NOW

    // // Find the user's active session
    // const activeSession = await Session.findOne({
    //   userId: userIdObj,
    //   isActive: true
    // })

    // // If there is no session return an error
    // if (!activeSession) {
    //   console.log('Error 404: Session not found')
    //   return {
    //     code: 404, // Not Found
    //     error: 'A session cannot be found for this user.'
    //   }
    // }

    // activeSession.isActive = false
    // activeSession.endedAt = new Date()

    // await activeSession.save()
    // console.log(`Session ended for user ${userId}`)

    return {
      code: 200,
      message: `Session ended for user ${userId}`
    }
  } catch (error) {
    console.error('Error ending the session:', error)
    return {
      code: 500,
      error: 'An error occurred while ending the session. Please try again.',
      originalError: error
    }
  }
}
