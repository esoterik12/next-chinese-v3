'use server'
import UserWord from '@/models/userword.model'
import { fetchNewWords } from './fetchNewWords'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import { startLearnSession } from '../session/startLearnSession'
import { AppError } from '@/lib/errors/AppError'
import User from '@/models/user.model'
import Sentence from '@/models/sentence.model'
import { ReviewResultDocument } from '@/types/review.types'

export async function fetchWords({
  userId,
  sessionWordGoal = 10
}: {
  userId: mongoose.Types.ObjectId | string
  sessionWordGoal: number
}) {
  try {
    await connectToDB()

    // 1: start a learning session
    const learnSession = await startLearnSession(userId)
    if (learnSession.code === 409) {
      console.log('Session in progress in fetchWord.ts: ', learnSession)
      return {
        message: learnSession.message,
        code: learnSession.code
      }
    }

    // 2: get the user latest word
    const { latestWord } = await User.findById(userId)

    // 3: fetch due words
    // This fetches the due UserWords data and fills in the wordId field with data from the Words collection
    // TODO: This section seems to not be working or the handling on the front end may not be working
    const today = new Date()
    const wordsDueResult = await UserWord.find({
      userId: userId,
      nextReviewDate: { $lte: today }
    })
      .sort({ nextReviewDate: 1 })
      .limit(sessionWordGoal)
      .populate({
        path: 'wordId',
        model: 'Word'
      })

    // 4: Create a new clean object without mongoose data
    // Using .lean() in mongoose function may be a solution in the future but not working now - simple option to save time
    const flattenedWordsDueResult: ReviewResultDocument[] = wordsDueResult.map(
      userWord => {
        return {
          // This section represents UserWords collection data
          _id: userWord._doc._id,
          userId: userWord._doc.userId,
          createdAt: userWord._doc.createdAt,
          easeFactor: userWord._doc.easeFactor,
          interval: userWord._doc.interval,
          nextReviewDate: userWord._doc.nextReviewDate,
          repetitions: userWord._doc.repetitions,
          reviewHistory: userWord._doc.reviewHistory,
          updatedAt: userWord._doc.updatedAt,
          // This section represents Words collection data
          wordId: userWord._doc.wordId._id,
          tocflLevel: userWord._doc.wordId.tocflLevel,
          wordNumber: userWord._doc.wordId.wordNumber,
          wordTraditional: userWord._doc.wordId.wordTraditional,
          wordSimplified: userWord._doc.wordId.wordSimplified,
          wordPinyin: userWord._doc.wordId.wordPinyin,
          wordTranslation: userWord._doc.wordId.wordTranslation,
          partOfSpeech: userWord._doc.wordId.partOfSpeech
        }
      }
    )

    // 5: fetch new words if not enough for sessionWordGoal
    if (wordsDueResult.length < sessionWordGoal) {
      const newWordsResult = await fetchNewWords({
        newWordsDue: sessionWordGoal - wordsDueResult.length,
        latestWordNumber: latestWord
      })

      // 6: Create a new clean object without mongoose data
      // Adds review session stats and default sm2 values used on the front-end
      const expandedNewWordsResult: ReviewResultDocument[] = newWordsResult.map(
        word => ({
          // Add existing Words collection data:
          wordId: word._id, // This uses the _id from Word collection
          tocflLevel: word.tocflLevel,
          wordNumber: word.wordNumber,
          wordTraditional: word.wordTraditional,
          wordSimplified: word.wordSimplified,
          wordPinyin: word.wordPinyin,
          wordTranslation: word.wordTranslation,
          partOfSpeech: word.partOfSpeech,
          // Add user id and s2 default values for future saving in UserWords colelction
          _id: new mongoose.Types.ObjectId(), // Generate new ObjectId for new words
          userId: userId,
          repetitions: 0,
          interval: 0,
          easeFactor: 2.5,
          nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // First review after 1 day
          reviewHistory: []
        })
      )

      // 7: Combines results of new Words collection data (expandedNewWordsResult) and UserWords data (flattenedWordsDueResult)
      expandedNewWordsResult.forEach(newWordObj =>
        flattenedWordsDueResult.push(newWordObj)
      )
    }

    // 8: fetch sentences for each word if they exist
    const wordIds = flattenedWordsDueResult.map(word => word.wordId)
    const sentencesTest = await Sentence.find({ wordId: { $in: wordIds } })
    const sentenceMap = sentencesTest.reduce((acc, sentence) => {
      acc[sentence.wordId] = sentence
      return acc
    }, {})

    // 9. Combine the data
    const finalWordAndSentenceData = flattenedWordsDueResult.map(word => ({
      ...word,
      sentence: sentenceMap[word.wordId.toString()] || null
    }))

    const jsonResults = JSON.parse(JSON.stringify(finalWordAndSentenceData))

    return {
      message: 'Successfully fetched words for review session.',
      code: 200,
      result: { words: jsonResults, userLatestWord: latestWord }
    }
  } catch (error) {
    console.error('Error fetching words from MongoDB: ', error)
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
