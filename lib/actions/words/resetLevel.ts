'use server'
// import UserWord from '@/models/userword.model'
import { connectToDB } from '@/lib/mongoose'
// import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'

/*
  This function will delete all UserWords with the userId and effectively reset their progress

  LEFT OF HERE: create a resetLevel function to be used if
  selectedLevel word < user's latestWord
  This will simply delete all UserWords above selectedLevel word

  ALSO: can be used as a reset account progress with the selectedLevel input as 0

  COMPLICATIONS?:
    This will involve collecting all word id that are above a certain level

  Process:
    1. Delete All UserWords where userId === userId

  Considerations:
    UserStats
    Reset Latest Word Number
*/

export async function resetLevel({
  userId,
}: {
  userId: string
}) {
  try {
    await connectToDB()
    // set userId to mongoose id
    // const mongoUserId = new mongoose.Types.ObjectId(userId)

    // await UserWord.deleteMany({ mongoUserId })

    return {
      message: `Successfully reset UserWords for user with id of ${userId}.`,
      code: 200
    }
  } catch (error) {
    console.error(
      `Error context: Failed to reset UserWords for user with id of ${userId}`,
      error
    )
    throw new AppError(500, 'Failed to reset UserWords')
  }
}
