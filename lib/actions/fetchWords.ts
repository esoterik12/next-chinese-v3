import UserWord from '@/models/userword.model'
import { connectToDB } from '../mongoose'
import { fetchNewWords } from './fetchNewWords'
import mongoose from 'mongoose'

// This function fetches words due for review and then fills up the sessonWordGoal
// with new words if necessary
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
      .populate({
        path: 'wordId',
        model: 'Word',
        select: ''
      })

    // Flattens the Word collection data into the wordsDue data
    const fetchWordsResult = wordsDueResult.map(userWord => {
      const { wordId, ...userWordWithoutWordId } = userWord.toObject()
      return { ...userWordWithoutWordId, ...wordId }
    })

    // Second: fetch new words if not enough for sessionWordGoal
    if (wordsDueResult.length < sessionWordGoal) {
      const newWordsResult = await fetchNewWords({
        newWordsDue: sessionWordGoal - wordsDueResult.length,
        latestWordNumber: 3333
      })

      // Adds review session stats and default sm2 values
      const expandedArray = newWordsResult.map(word => ({
        ...word,
        userId: userId,
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // First review after 1 day
        reviewHistory: [],
      }))

      // Combines results
      expandedArray.forEach(newWordObj => fetchWordsResult.push(newWordObj))
    }

    const jsonResults = JSON.parse(JSON.stringify(fetchWordsResult))

    return {
      message: 'Successfully fetched words for review session.',
      code: 200,
      result: jsonResults
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
