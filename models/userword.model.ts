/*
Userwords will have a few stats, a foreign key to the word model
it will also keep tack of the correct count and incorrect count

when a word is fetched for the user it will have to fetch the word and the sentences

Key properties for each userword
1. Next interval to fit with the SM-2 algorith
2. Repetitions (starts at 0 for a new word)
3. I - Interval
4. EF - Ease Factor
5. Next review date (will be used when collecting words to review)
6. Quality score (user input)
7. Review history - optional (could be interesting for stats)

Some basics of the core forumla

A. First two reviews
I(1) = 1 (first review after 1 day)
I(2) = 6

B. Subsequent Reviews (n > 2):
I(n) = I(n - 1) x EF
Interval for n is equal to the previous interval multipled by the ease factor

C. Ease factor adjustment:
After each review, adjust EF based on performance - quality score q from 0 to 5
newEF = EF + (0.1 - (5 - q) x (0.08 + ( 5 - q) x 0.02))
if q is less than 3, interval resets to I(1) = 1, but the ease factor is still updated

Key points:
Interval I(n)I(n): Determines when the next review should happen, and it grows exponentially based on the Ease Factor.
Ease Factor (EF): Modifies how fast the intervals grow based on performance.
Quality Score qq: Ranges from 0 to 5, where 5 means perfect recall, and 0 means failure to recall.

Some considerations:
Users should have some extra control over the intervals - maybe they can set the I(1-2) for example
How does the code implementation get the words to be reviewed?

*/
import mongoose from 'mongoose'

const userWordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    wordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Word',
      required: true
    },
    repetitions: {
      type: Number,
      required: true,
      default: 0
    },
    interval: {
      type: Number,
      required: true,
      default: 1 // Initial interval is 1 day (SM-2 logic)
    },
    easeFactor: {
      type: Number,
      required: true,
      default: 2.5 // SM-2 default
    },
    nextReviewDate: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) // First review after 1 day
    },
    reviewHistory: [
      {
        date: { type: Date, required: true },
        quality: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
)

// Manually defined schema - not extending mongoose types
// TODO: find an alternative that doesn't require a rewriting of the types from the schema
export interface UserWord {
  userId: mongoose.Types.ObjectId
  wordId: mongoose.Types.ObjectId
  repetitions: number
  interval: number
  easeFactor: number
  nextReviewDate: Date
  reviewHistory: { date: Date; quality: number }[]
}

// Extend the base Document type and add only the relevant properties
export interface UserWordDocument extends UserWord, Document {}

const UserWord =
  mongoose.models.UserWord ||
  mongoose.model<UserWordDocument>('UserWord', userWordSchema)

export default UserWord
