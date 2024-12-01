'use server'
// import UserWord from '@/models/userword.model'
import { connectToDB } from '@/lib/mongoose'
import mongoose from 'mongoose'
import { AppError } from '@/lib/errors/AppError'
import Word from '@/models/word.model'

/*
  Updates a user's progress to match a selected target level.
  Making all words below the target level assumed as already learned, 
  giving them nextReviewDates incrementally in the future.

 1. Retrieves words from the database that fall between the user's current progress 
    (`userLatestWord`) and the target word for the new level.
 2. Creates a bulk update operation for the `UserWord` model to add or update 
    review stats (`easeFactor`, `interval`, `nextReviewDate`, etc.) for the words in 
    the target range.
 3. Uses `bulkWrite` to execute the update, ensuring new `UserWord` entries 
    are created if they don't already exist.

*/

const startLevelWordNumber = {
  1: 0,
  2: 501,
  3: 999,
  4: 2502,
  5: 4998
}

export async function setLevel({
  userId,
  selectedLevel,
  userLatestWord
}: {
  userId: string
  selectedLevel: 1 | 2 | 3 | 4 | 5
  userLatestWord: number
}) {
  try {
    await connectToDB()
    // set userId to mongoose id
    const mongoUserId = new mongoose.Types.ObjectId(userId)

    // Sets the user's new latestWord value
    const newUserLatestWord = startLevelWordNumber[selectedLevel] - 1 // -1 to make latest word last word of prev level

    // Gets all words that will need to be added as new UserWords to fit level target
    const wordsToUpdate = await Word.find({
      wordNumber: { $gt: userLatestWord, $lte: newUserLatestWord }
    })

    // Create date object to be incremented for nextReviewDate
    const today = new Date()
    let dayIncrement = 1

    // Creates a mongoose bulkWrite object with userId and basic started sm2 stats:
    // TODO: the easeFactor and interval may need to be adjusted based on testing
    const newUserWordsUpdate = wordsToUpdate.map((word, index) => {
      const nextReviewDate = new Date(today)
      nextReviewDate.setDate(nextReviewDate.getDate() + dayIncrement)

      if ((index + 1) % 10 === 0) {
        dayIncrement++
      }

      return {
        updateOne: {
          filter: { wordId: word._id, userId: mongoUserId },
          update: {
            $set: {
              easeFactor: 3,
              interval: 10,
              nextReviewDate: nextReviewDate,
              repetitions: 0
            },
            $setOnInsert: {
              userId: mongoUserId
            }
          },
          upsert: true
        }
      }
    })

    // TODO: Complete this function
    // Currently Disabled
    // await UserWord.bulkWrite(newUserWordsUpdate);

    // TODO: This function also has to reset user stats for at least latestWord
    console.log('newUserWords', newUserWordsUpdate)

    return {
      message: 'Successfully set new level for user.',
      code: 200
    }
  } catch (error) {
    console.error(`Error context: Setting new level for user ${userId}`, error)
    throw new AppError(500, 'Failed to set new level.')
  }
}
