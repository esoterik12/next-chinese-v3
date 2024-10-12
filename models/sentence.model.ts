// Word has a one to many relationship with senteces
// Each word can have multiple sentences
// Sentence will have: sentTraditional, sentSimplified, sentPinyin, sentTranslation, upvotes, downvotes, views, dateGenerated,
import mongoose from 'mongoose'

const sentenceSchema = new mongoose.Schema(
  {
    wordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Word',
      required: true // A sentence will always be associated with a single word
    },
    sentTraditional: {
      type: String,
      required: true
    },
    sentSimplified: {
      type: String,
      required: true
    },
    sentPinyin: {
      type: String,
      required: true
    },
    sentTranslation: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

export interface SentenceDocument
  extends Document,
    mongoose.InferSchemaType<typeof sentenceSchema> {}

const Sentence =
  mongoose.models.Sentence || mongoose.model('Sentence', sentenceSchema)

export default Sentence
