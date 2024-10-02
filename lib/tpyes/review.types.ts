import mongoose from 'mongoose'

export interface ReviewResult {
  wordId: mongoose.Types.ObjectId
  repetitions: number
  interval: number
  easeFactor: number
  nextReviewDate: Date
  reviewHistory: {
    date: Date
    quality: number
  }[]
}
