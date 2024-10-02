import UserWord from '@/models/userword.model'
import { connectToDB } from '../mongoose'
import { fetchNewWords } from './fetchNewWords'
import mongoose from 'mongoose'

export async function fetchWords({
  userId,
  sessionWordGoal = 10
}: {
  userId: mongoose.Types.ObjectId
  sessionWordGoal: number
}) {
  try {
    await connectToDB()

    // First: fetch due words
    const today = new Date()
    const wordsDueResult = await UserWord.find({
      userId: userId,
      nextReviewDate: { $lte: today }
    })
      .sort({ nextReviewDate: 1 })
      .limit(sessionWordGoal)

    // Second: fetch new words if not enough for sessionWordGoal
    const newWordsResult = await fetchNewWords({
      newWordsDue: sessionWordGoal - wordsDueResult.length,
      latestWordNumber: 3333
    })

    // Add return or combined results:
    console.log('wordsDueResult', wordsDueResult)
    console.log('newWordsResult', newWordsResult)
    return {
      message: 'Successfully fetched words for review session.',
      code: 200,
      result: {
        wordsDueResult,
        newWordsResult
      }
    }
  } catch (error) {
    console.error('Error context: Fetching words from MongoDB', error)

    throw {
      message: 'Failed to fetch words',
      code: 500,
      originalError: error
    }
  }
}
