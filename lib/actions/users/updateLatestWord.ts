'use server'
import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'
import { connectToDB } from '@/lib/mongoose'
import User from '@/models/user.model'

export async function updateLatestWord({
  newLatestWord,
  userId
}: {
  newLatestWord: number
  userId: mongoose.Types.ObjectId | string
}) {
  try {
    await connectToDB()

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { latestWord: newLatestWord } }
    )

    if (!updatedUser) {
      throw new AppError(500, 'User not found')
    }

    return {
      message: 'Successfully updated user latest word.',
      code: 200
    }
  } catch (error) {
    console.error('Error context: Update user latest word failed.', error)
    throw new AppError(500, 'Failed to update user latest word.')
  }
}
