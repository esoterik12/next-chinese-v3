// import EndLearnSession from '@/components/buttons/EndLearnSession'
import ReviewContainer from '@/components/containers/ReviewContainer'
import { fetchWords } from '@/lib/actions/words/fetchWords'
import { dummyUserData } from '@/lib/dummyData'
import { ReviewResultDocument } from '@/types/review.types'

export default async function UiDesignPage() {
  // Fetches words due for review first and fills with new words
  // Returns object with code, message, result
  const fetchedWords = await fetchWords({
    userId: dummyUserData._id,
    sessionWordGoal: 10
  })

  // if (fetchedWords.code === 409) {
  //   return (
  //     <main className='flex h-[calc(100vh-64px)] flex-col items-center'>
  //       <section className='mt-6 flex h-full w-full flex-grow flex-col items-center justify-center'>
  //         <p className='p-2'>Error: session already active for this user.</p>{' '}
  //         <EndLearnSession userId={dummyUserData._id.toString()} />
  //       </section>
  //     </main>
  //   )
  // }

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
      <ReviewContainer userId={dummyUserData._id.toString()} fetchedWords={fetchedWordsSeenToday} />
    </main>
  )
}
