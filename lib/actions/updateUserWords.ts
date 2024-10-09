'use server'
import UserWord, { UserWordDocument } from '@/models/userword.model'
import { connectToDB } from '../mongoose'
import mongoose from 'mongoose'

// This function should use a complete result object array from app state after a review session
// It will update use bulkWrite with a mapped array into updateOne with upsert: true for new
export async function updateUserWords({
  reviewResults,
  userId
}: {
  // TODO: any type
  reviewResults: UserWordDocument[] | any
  userId: mongoose.Types.ObjectId
}) {
  try {
    await connectToDB()

    // TODO: Any type
    const bulkUserWordsUpdate = reviewResults.map((word: any) => ({
      updateOne: {
        filter: { _id: word.wordId, userId: userId }, // Multiple conditions
        update: {
          $set: {
            wordId: word.wordId,
            userId: userId,
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
