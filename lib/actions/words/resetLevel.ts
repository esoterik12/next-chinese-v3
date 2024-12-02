'use server'
import UserWord from '@/models/userword.model'
import { connectToDB } from '@/lib/mongoose'
import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'
import User from '@/models/user.model'
import UserStats from '@/models/userstats.model'
import Session from '@/models/session.model'

/*
  This function will delete all UserWords with the userId and effectively reset their progress.
  It also cleans up UserStats records, any Sessions, and updates their latestWord to to 0.
  This function is also using mongoose to set up MongoDB transactions.
  This means if any update fails, then other updates are also rolled back.
*/

export async function resetLevel({ userId }: { userId: string }) {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    await connectToDB()
    const mongoUserId = new mongoose.Types.ObjectId(userId)

    await UserWord.deleteMany({ userId: mongoUserId }).session(session)
    await User.updateOne(
      { _id: mongoUserId },
      { $set: { latestWord: 0 } }
    ).session(session)
    await UserStats.deleteMany({ userId: mongoUserId }).session(session)
    await Session.deleteMany({ userId: mongoUserId }).session(session)

    await session.commitTransaction()
    session.endSession()

    return {
      message: `Successfully reset UserWords for user with id of ${userId}.`,
      code: 200
    }
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    console.error(
      `Error context: Failed to reset UserWords for user with id of ${userId}`,
      error
    )
    throw new AppError(500, 'Failed to reset UserWords')
  }
}
