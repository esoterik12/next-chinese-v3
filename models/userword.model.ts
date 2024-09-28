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

The broad structure of the database is that there are:
A. Users collection (auth and profile), 
B. Words collection to be learned (with translations, parts of speech, a level, an order number in which they are learned),
C. WordRecords collection of each user's experiences with the words: their repetitions, ease factor, next view date, etc.
D. ContextSentences collection (multiple) that apply to each word: sentences and their translations

Users have a one to many relationship with Words (the words they've learned)
Users have a one to many relationship with their WordRecords (learning statistics etc) 
Words have a one to many relationship with with WordRecords (one word being learned by mutiple users)
Words have a one to many relationship with their context sentences of which there can be multiple for each word (the same sentences will not be used for multiple words)

I have a few questions and general issues with how to structure this database and whether I
have identified the correct collections / tables to use

1. If each user has 100s or 1000s of WordRecords, is it acceptable for all those word records
to be stored in the same collection and to retrieve them (say 50 at a time) using the userId AND 
according to their next interval date. Would that be too time consuming?

2. Is the option of storing all of a user's WordRecords in the user's entry, say as an
array of objects for each word worth exploring?

3.

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
      default: 2.5 // SM-2
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

const UserWord =
  mongoose.models.UserWord || mongoose.model('UserWord', userWordSchema)

export default UserWord
