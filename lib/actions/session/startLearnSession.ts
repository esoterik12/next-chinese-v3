'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'
import { AppError } from '@/lib/errors/AppError'
const dynamic = 'force-dynamic'
const revalidate = 0

export async function startLearnSession(
  userId: mongoose.Types.ObjectId | string
) {
  try {
    const activeSession = await Session.findOne({ userId, isActive: true })

    if (activeSession) {
      return {
        message: 'A session is already active for this user.',
        code: 409
      }
    }

    const newSession = new Session({ userId })
    await newSession.save()

    return {
      code: 200,
      message: `Session started for user ${userId}`,
      result: newSession
    }
  } catch (error) {
    console.error('Error starting a session:', error)
    throw new AppError(
      500,
      'An error occurred while starting the session. Please try again.'
    )
  }
}
