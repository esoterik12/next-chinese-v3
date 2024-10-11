'use server'
import UserWord from '@/models/userword.model'
import { fetchNewWords } from './fetchNewWords'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
// import { startLearnSession } from '../session/startLearnSession'

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

    // const learnSession = await startLearnSession(userId)
    // if (learnSession.code === 409) {
    //   return {
    //     message: 'Failed to fetch words; session already active.',
    //     code: learnSession.code,
    //     originalError: learnSession.message
    //   }
    // }
    // console.log('learnSession', learnSession)

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

    console.log('Tried fetching userWords - wordsDueResult: ', wordsDueResult)

    // Flattens the Word collection data into the wordsDue data
    const fetchWordsResult = wordsDueResult.map(userWord => {
      const { wordId, ...userWordWithoutWordId } = userWord.toObject()
      return { ...userWordWithoutWordId, ...wordId }
    })

    // Second: fetch new words if not enough for sessionWordGoal
    if (wordsDueResult.length < sessionWordGoal) {
      const newWordsResult = await fetchNewWords({
        newWordsDue: sessionWordGoal - wordsDueResult.length,
        latestWordNumber: 5
      })

      // Adds review session stats and default sm2 values
      const expandedArray = newWordsResult.map(word => ({
        ...word,
        // TODO Possible Issue: Saving id as a duplicate - find alternative?
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

    throw {
      message: 'Failed to fetch words',
      code: 500,
      originalError: error
    }
  }
}
