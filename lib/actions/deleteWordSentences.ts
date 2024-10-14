'use server'
import Word from '@/models/word.model'
import { connectToDB } from '../mongoose'
import User from '@/models/user.model'

// THIS is a development function for cleaning up errors in sentence saving and loading 

export default async function deleteWordSentencesInWords() {
  try {
    await connectToDB()
    // Find all words where wordSentences array has some elements (length > 0)
    const result = await Word.updateMany(
      { $expr: { $gt: [{ $size: '$wordSentences' }, 0] } }, // Matches documents with non-empty wordSentences array
      { $set: { wordSentences: [] } } // Sets wordSentences array to an empty array
    )

    await User.findByIdAndUpdate(
      '670a6a17161d9454a1d19ddf',
      { $set: { latestWord: 0 } }
    )

    console.log(
      `Updated ${result.modifiedCount} words by removing all wordSentences.`
    )
    console.log(`Updated user - set latest word to zero`)
  } catch (err) {
    console.error('Error deleting wordSentences in words:', err)
  }
}
