'use server'
import mongoose from 'mongoose'
import Session from '@/models/session.model'

export async function endLearnSession(userId: string) {
  try {
    const userIdOb = new mongoose.Types.ObjectId(userId)
    const activeSession = await Session.findOne({ userId: userIdOb, isActive: true })

    if (!activeSession) {
      console.log('Error 404: Session not found')
      return {
        code: 404, // Not Found
        error: 'A session cannot be found for this user.'
      }
    }

    activeSession.isActive = false
    activeSession.endedAt = new Date()

    await activeSession.save()
    console.log(`Session ended for user ${userId}`)

    return {
      code: 200,
      message: `Session ended for user ${userId}`
    }
  } catch (error) {
    console.error('Error ending the session:', error)
    return {
      code: 500,
      error: 'An error occurred while ending the session. Please try again.',
      originalError: error
    }
  }
}
