'use server'
import Sentence from '@/models/sentence.model'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import { SentenceProps } from '@/components/cards/SentenceCard'
import Word from '@/models/word.model'

export interface SaveSentenceProps {
  wordId: mongoose.Types.ObjectId | string
  newSentences: SentenceProps
}

export async function saveSentences({
  newSentences
}: {
  newSentences: SaveSentenceProps[]
}) {
  try {
    await connectToDB()

    console.log('newSentences', newSentences)

    const savedSentences = await Sentence.insertMany(newSentences)

    // Object to group sentences by wordId - each property will be the word id with the values an array of sentenceIds
    const wordSentencesMap = {}

    savedSentences.forEach(({ wordId, _id: sentenceId }) => {
      // If no property for wordId, create it with empty array as its value
      if (!wordSentencesMap[wordId]) {
        wordSentencesMap[wordId] = []
      }
      // Add sentence id to corresponding word
      wordSentencesMap[wordId].push(sentenceId)
    })

    // Create an array of promises for updating each wordId
    const updatePromises = Object.keys(wordSentencesMap).map(wordId => {
      return Word.updateMany(
        { _id: wordId },
        { $addToSet: { wordSentences: { $each: wordSentencesMap[wordId] } } }
      )
    })

    await Promise.all(updatePromises)

    return {
      message: 'Successfully saved new sentences.',
      code: 200,
      result: savedSentences
    }
  } catch (error) {
    console.error('Error saving sentences: ', error)

    throw {
      message: 'Failed to fetch words',
      code: 500,
      originalError: error
    }
  }
}
