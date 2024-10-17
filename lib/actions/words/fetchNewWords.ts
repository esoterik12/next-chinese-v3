'use server'
import Word from '@/models/word.model'
import { connectToDB } from '@/lib/mongoose'
import { AppError } from '@/lib/errors/AppError'
import { WordClientData } from '@/types/review.types'

export async function fetchNewWords({
  newWordsDue,
  latestWordNumber
}: {
  newWordsDue: number
  latestWordNumber: number
}) {
  try {
    await connectToDB()
    const fetchedNewWords: WordClientData[] = await Word.find({
      wordNumber: { $gte: latestWordNumber + 1 }
    })
      // .lean() // Ensures only JS objects returned - removes mongoose overhead
      .sort({ wordNumber: 1 })
      .limit(newWordsDue)

    return fetchedNewWords
  } catch (error) {
    console.error('Error context: Fetching new words from MongoDB', error)
    throw new AppError(500, 'Failed to fetch new words')
  }
}
