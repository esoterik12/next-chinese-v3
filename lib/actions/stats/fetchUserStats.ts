'use server'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import UserStats from '@/models/userstats.model'
import { AppError } from '@/lib/errors/AppError'

export async function fetchUserStats(userId: mongoose.Types.ObjectId) {
  try {
    await connectToDB()

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const userStatsData = await UserStats.find({
      userId: userId,
      date: { $gte: thirtyDaysAgo }
    }).lean()

    const sortedUserStats = userStatsData
      .sort((a, b) => a.date - b.date)
      .map(item => ({
        date: item.date,
        viewCount: item.viewCount
      }))

    // create an array of dates for 30 days with viewCount: 0 (for days with no activity)
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    const userStatsComplete = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today)
      date.setUTCDate(today.getUTCDate() - i)
      return { date, viewCount: 0 }
    })

    // combine sortedUserStats with emptyDateArray
    for (let i = 0; i < userStatsComplete.length; i++) {
      const dateMatch = sortedUserStats.find(
        stat => stat.date.toISOString() === userStatsComplete[i].date.toISOString()
      )

      if (dateMatch) {
        userStatsComplete[i].viewCount = dateMatch.viewCount
      }
    }

    return {
      message: 'Successfully fetched user stats.',
      code: 200,
      result: userStatsComplete
    }
  } catch (error) {
    console.error('Error fetching user stats: ', error)
    throw new AppError(500, 'Failed to fetch user stats.')
  }
}
