'use server'
import Sentence from '@/models/sentence.model'
import { connectToDB } from '@/lib/mongoose'
import { NewSentenceProps } from '@/types/review.types'
import Word from '@/models/word.model'

export async function saveSentences({
  newSentences
}: {
  newSentences: NewSentenceProps[] // This type is just strings before wordId
}) {
  try {
    await connectToDB()

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
