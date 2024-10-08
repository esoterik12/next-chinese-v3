import ReviewContainer from '@/components/containers/ReviewContainer'
import { fetchWords } from '@/lib/actions/fetchWords'
import { dummyUserData } from '@/lib/dummyData'
import { ReviewResultDocument } from '@/types/review.types'

export default async function UiDesignPage() {
  // Fetches words due for review first and fills with new words
  // Returns object with code, message, result
  const fetchedWords = await fetchWords({
    userId: dummyUserData._id,
    sessionWordGoal: 7
  })

  // Adds seenToday property for client side context reducer
  const fetchedWordsSeenToday = fetchedWords.result.map(
    (word: ReviewResultDocument[]) => ({
      ...word,
      seenToday: false,
      newSentencesArray: []
    })
  )

  return (
    <main className='flex h-[calc(100vh-64px)] flex-col items-center'>
      {/* First section, takes up 50% */}
      <section className='mt-6 flex h-full w-full flex-grow flex-col items-center justify-center'>
        <ReviewContainer fetchedWords={fetchedWordsSeenToday} />
      </section>
    </main>
  )
}
