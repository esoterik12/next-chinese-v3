'use server'
import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'
import { connectToDB } from '@/lib/mongoose'
import User from '@/models/user.model'
import { ReviewResultDocument } from '@/types/review.types'

interface UserUpdate {
  latestWord?: number
  preferredChars?: 'traditional' | 'simplified'
}

/*
  This function conditionally updates the latestWord a user has seen
  the preferredChars state if either has changed
*/

export async function updateUser({
  userId,
  latestWord,
  finishedWords,
  characterState,
  preferredChars
}: {
  userId: mongoose.Types.ObjectId | string
  latestWord: number
  finishedWords: ReviewResultDocument[]
  characterState: 'simplified' | 'traditional'
  preferredChars: 'simplified' | 'traditional'
}) {
  try {
    const highestWordNumber = finishedWords.reduce((max, word) => {
      return word.wordNumber > max ? word.wordNumber : max
    }, 0)

    await connectToDB()

    const update: UserUpdate = {}

    if (highestWordNumber > latestWord) {
      update.latestWord = highestWordNumber
    }

    if (preferredChars !== characterState) {
      update.preferredChars = characterState
    }

    if (Object.keys(update).length > 0) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $set: update },
        { new: true }
      )

      if (!updatedUser) {
        throw new AppError(500, 'User not found')
      }

      return {
        message: 'Successfully updated user latest word.',
        code: 200
      }
    } else {
      return {
        message: 'No user updates were required.',
        code: 204
      }
    }
  } catch (error) {
    console.error('Error context: Update user latest word failed.', error)
    throw new AppError(500, 'Failed to update user.')
  }
}
