'use server'
import UserWord from '@/models/userword.model'
import { fetchNewWords } from './fetchNewWords'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import { startLearnSession } from '../session/startLearnSession'
import { AppError } from '@/lib/errors/AppError'
const dynamic = 'force-dynamic'

export async function fetchWords({
  userId,
  userLatestWord,
  sessionWordGoal = 10
}: {
  userId: mongoose.Types.ObjectId | string
  userLatestWord: number
  sessionWordGoal: number
}) {
  try {
    await connectToDB()

    const learnSession = await startLearnSession(userId)
    if (learnSession.code === 409) {
      console.log('Session in progress in fetchWord.ts: ', learnSession)
      return {
        message: learnSession.message,
        code: learnSession.code
      }
    }

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
        latestWordNumber: userLatestWord
      })

      // Adds review session stats and default sm2 values used on the front-end
      const expandedArray = newWordsResult.map(word => ({
        ...word,
        wordId: word._id, // Added as duplicate for saving in UserWords after review
        userId: userId,
        repetitions: 0,
        interval: 0,
        easeFactor: 2.5,
        nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // First review after 1 day
        reviewHistory: []
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
    console.error('Error Fetching words from MongoDB: ', error)
    if (error instanceof AppError) {
      return {
        code: error.code,
        error: error.message
      }
    }

    // Generic errors
    return {
      code: 500,
      error: `An unexpected error occurred fetching words: ${error.message}`
    }
  }
}
