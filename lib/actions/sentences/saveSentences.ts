'use server'
import Sentence from '@/models/sentence.model'
import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import { GeneratedSentenceProps } from '@/components/cards/SentenceCard'

export interface SaveSentenceProps {
  wordId: mongoose.Types.ObjectId
  newSentences: GeneratedSentenceProps
}

// LEFT IT HERE - START HERE: this is mostly done
// But the overall logic for ending a session / updating words / saving sentences
// is beginning to come together.
// The end of a session needs to do all three together

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
