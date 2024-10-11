'use server'
import UserWord from '@/models/userword.model'
import { connectToDB } from '../mongoose'
import mongoose from 'mongoose'
import { ReviewResultDocument } from '@/types/review.types'

// This function should use a complete result object array from app state after a review session
// It will update use bulkWrite with a mapped array into updateOne with upsert: true for new
export async function updateUserWords({
  reviewResults,
  userId
}: {
  // TODO: any type
  reviewResults: ReviewResultDocument[]
  userId: mongoose.Types.ObjectId
}) {
  try {
    await connectToDB()

    console.log('reviewResults in updateUserWords: ', reviewResults)

    // LEFT OFF: This works now, correctly updating or upserting UserWords
    // Issues with state, particularly reviewHistory double entry
    // Check repetitions as well and other sm-2 state - seem to be wrong
    const bulkUserWordsUpdate = reviewResults.map((word: ReviewResultDocument) => ({
      updateOne: {
        filter: { _id: word.wordId, userId: userId }, // Multiple conditions
        update: {
          $set: {
            wordId: word.wordId, // Sets the wordId to the correspond id of the word in Words collection
            userId: userId, // Connects word to a user
            repetitions: word.repetitions,
            interval: word.interval,
            easeFactor: word.easeFactor,
            nextReviewDate: word.nextReviewDate,
            reviewHistory: word.reviewHistory
          }
        },
        upsert: true // Insert if newly learned word and not in UserWords
      }
    }))

    const result = await UserWord.bulkWrite(bulkUserWordsUpdate)

    console.log('Successfully updated user words - result:', result)
    return {
      message: 'Successfully updated user words',
      code: 200
    }
  } catch (error) {
    console.error('Error context: Fetching words from MongoDB', error)

    throw {
      message: 'Failed to fetch new words',
      code: 500,
      originalError: error
    }
  }
}
