'use server'
import UserWord from '@/models/userword.model'
import { connectToDB } from '../mongoose'
import mongoose from 'mongoose'
import { ReviewResultDocument } from '@/types/review.types'
import { AppError } from '../errors/AppError'

export async function updateUserWords({
  reviewResults,
  userId
}: {
  reviewResults: ReviewResultDocument[]
  userId: mongoose.Types.ObjectId
}) {
  try {
    await connectToDB()

    const bulkUserWordsUpdate = reviewResults.map(
      (word: ReviewResultDocument) => ({
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
      })
    )

    await UserWord.bulkWrite(bulkUserWordsUpdate)

    return {
      message: 'Successfully updated user words',
      code: 200
    }
  } catch (error) {
    console.error('Error context: Fetching words from MongoDB', error)
    throw new AppError(500, 'Failed to update user words.')
  }
}
