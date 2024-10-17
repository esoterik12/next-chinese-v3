// These words will have a one to many relationship with users
// (users will have a list of ids of words they have seen, learned)

// Words will have a one to many relationship with sentences (can be zero if none generated yet)
// Limit to 10 (if sentences.length > 10 pop those at the end (sort by rating - upvotes and downvotes))

// Word number: this could be used to have a clear sequential order for learning, so all users follow the same path
// This is especially relevant for Level 1 and 2, perhpas 3, but 4 and 5 order the orders in a strange way
// Perhaps find an ordering that matches the Taiwan text books

import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
  tocflLevel: {
    type: Number,
    required: true
  },
  wordNumber: {
    type: Number,
    required: true
  },
  wordTraditional: {
    type: String,
    required: true
  },
  wordSimplified: {
    type: String,
    required: true
  },
  wordPinyin: {
    type: String,
    required: true
  },
  wordTranslation: {
    type: String,
    required: true,
    default: 'N/A'
  },
  partOfSpeech: {
    type: String,
    required: true,
    default: 'N/A'
  }
})

const Word =
  mongoose.models.Word || mongoose.model<Document>('Word', wordSchema)

export default Word
