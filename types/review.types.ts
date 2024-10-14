import { UserWordDocument } from '@/models/userword.model'
import { WordDocument } from '@/models/word.model'
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

// Combine UserWordDocument and WordDocument with additional properties
export type ReviewResultDocument = UserWordDocument &
  WordDocument & {
    seenToday: boolean
    newSentencesArray?: NewSentenceProps[] 
    sentence: SentenceProps
  }
