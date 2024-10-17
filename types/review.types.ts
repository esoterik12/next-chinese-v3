import mongoose from 'mongoose'

export interface BaseSentenceProps {
  sentTraditional: string
  sentSimplified: string
  sentPinyin: string
  sentTranslation: string
}

// Interface for new sentences from ChatGPT API
export interface NewSentenceProps extends BaseSentenceProps {}

// Interface for saving sentences to DB
export interface SaveSentenceProps {
  wordId: mongoose.Types.ObjectId | string
  newSentences: NewSentenceProps
}

// Interface for sentence documents from DB
export interface SentenceProps extends BaseSentenceProps {
  _id: mongoose.Types.ObjectId | string
  wordId: mongoose.Types.ObjectId | string
  createdAt: Date
  updatedAt: Date
  __v: number
}

// Manually defined schemas
export interface WordClientData {
  _id: mongoose.Types.ObjectId
  tocflLevel: number
  wordNumber: number
  wordTraditional: string
  wordSimplified: string
  wordPinyin: string
  wordTranslation: string
  partOfSpeech: string
}

export interface UserWordClientData {
  _id?: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId | string
  wordId: mongoose.Types.ObjectId | string
  repetitions: number
  interval: number
  easeFactor: number
  nextReviewDate: Date
  reviewHistory: { date: Date; quality: number }[]
}

// This is a manually defined type to handle the client-side data
// combined from the UserWord and Word collections
export interface ReviewResultDocument {
  // Word collection data:
  wordId: mongoose.Types.ObjectId | string
  tocflLevel: number
  wordNumber: number
  wordTraditional: string
  wordSimplified: string
  wordPinyin: string
  wordTranslation: string
  partOfSpeech: string
  // UserWord collection data:
  _id: mongoose.Types.ObjectId | string // newly fetched words will not have a _id since they are not stored in the UserWords collection yet
  userId: mongoose.Types.ObjectId | string
  repetitions: number
  interval: number
  easeFactor: number
  nextReviewDate: Date
  createdAt?: Date // Will not feature in newly added words
  updatedAt?: Date // Will not feature in newly added words
  reviewHistory: { date: Date; quality: number }[]
  // Additional client-side data:
  sentence?: SentenceProps
  seenToday?: boolean
  newSentencesArray?: BaseSentenceProps[]
}
