'use server'
import Sentence from '@/models/sentence.model'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import { SentenceProps } from '@/components/cards/SentenceCard'

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

    const savedSentences = await Sentence.insertMany(newSentences)

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
