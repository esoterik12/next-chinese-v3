'use server'
import { connectToDB } from '@/lib/mongoose'
import { AppError } from '@/lib/errors/AppError'
import UserWord from '@/models/userword.model'
import User from '@/models/user.model'
import Session from '@/models/session.model'

// This function returns checks for active sesison
// Otherwise returns userId and wordsDueCount

export async function fetchUserInfo({ userEmail }: { userEmail: string }) {
  try {
    await connectToDB()

    const user = await User.findOne({ email: userEmail })

    const today = new Date()

    const activeSession = await Session.findOne({
      userId: user._id,
      isActive: true
    })

    if (activeSession) {
      return {
        message: 'This user has an active session in progress',
        code: 409,
        result: user._id
      }
    }

    const wordsDueCount = await UserWord.countDocuments({
      userId: user._id,
      nextReviewDate: { $lte: today }
    })

    return {
      message: 'Successfully fetched count of words due.',
      code: 200,
      result: { wordsDueCount, user }
    }
  } catch (error) {
    console.error('Error context: Fetching new words from MongoDB', error)
    throw new AppError(500, 'Failed to fetch new words')
  }
}
