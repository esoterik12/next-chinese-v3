'use server'
import UserStats from '@/models/userstats.model'
import { connectToDB } from '@/lib/mongoose'
import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'

export async function updateUserStats({
  userId,
  sessionViewCount,
  sessionStartTime
}: {
  userId: mongoose.Types.ObjectId
  sessionViewCount: number
  sessionStartTime: number
}) {
  try {
    const today = new Date()
    const now = today.getTime() // for duration

    today.setUTCHours(0, 0, 0, 0)

    await connectToDB()

    await UserStats.findOneAndUpdate(
      {
        userId: userId,
        date: today
      },
      {
        $inc: {
          viewCount: sessionViewCount,
          duration: Math.floor((now - sessionStartTime) / 1000)
        }
      },
      { upsert: true }
    )

    return {
      code: 200,
      message: `Stats successfully updated for user ${userId} on ${today}`
    }
  } catch (error) {
    console.error('Failed to update user stats:', error)
    throw new AppError(500, 'Failed to update user stats')
  }
}
