'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import ReviewContainer from '@/components/containers/ReviewContainer'
import { fetchWords } from '@/lib/actions/words/fetchWords'
import { ReviewResultDocument } from '@/types/review.types'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect } from 'react'

const LearnGoalPage = ({ params }: { params: { goal: string } }) => {
  const { dispatch } = useAppContext()
  const { data: session, status } = useSession()

  if (!params.goal || !session) return null // TODO add error handling for this
  if (!['5', '20', '50', '80', '100'].includes(params.goal))
    return <p>Invalid goal selected.</p> // TODO add better handling

  // Uses goal from params and user.id from jwt session to fetch words and adds them to react context state
  useEffect(() => {
    const getLearnWords = async () => {
      if (!session) return

      try {
        // This function gets words AND uses user id to start a review session in the DB
        const learnSessionData = await fetchWords({
          userId: session.user.id,
          sessionWordGoal: +params.goal
        })

        // Map through fetched words to add seenToday and newSentencesArray properties
        if (learnSessionData.result) {
          const fetchedWordsSeenToday = learnSessionData.result.words.map(
            (word: ReviewResultDocument) => ({
              ...word,
              seenToday: false,
              newSentencesArray: []
            })
          )
          dispatch({
            type: 'loadWords',
            fetchedWords: fetchedWordsSeenToday,
            userLatestWord: learnSessionData.result.userLatestWord
          })
        }

        // Dispatch the fetched words to the context
      } catch (error) {
        // TODO: Better error handling
        console.error('Error fetching words:', error)
      }
    }

    getLearnWords()
  }, [dispatch, session, params.goal])

  return (
    <main className='flex h-[calc(100vh-64px)] flex-col items-center justify-center'>
      <ReviewContainer
        userId={session.user.id}
        goal={params.goal}
      />
    </main>
  )
}

export default LearnGoalPage
