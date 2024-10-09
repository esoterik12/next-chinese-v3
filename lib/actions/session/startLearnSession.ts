'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'

export async function startLearnSession(userId: mongoose.Types.ObjectId) {
  try {
    const activeSession = await Session.findOne({ userId, isActive: true })

    if (activeSession) {
      console.log('Error 409: Session active')
      return {
        code: 409, // Conflict
        error: 'A session is already active for this user.'
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

    return {
      code: 500,
      error: 'An error occurred while starting the session. Please try again.',
      originalError: error
    }
  }
}
