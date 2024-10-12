'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import ReviewContainer from '@/components/containers/ReviewContainer'
import { fetchWords } from '@/lib/actions/words/fetchWords'
import { ReviewResultDocument } from '@/types/review.types'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect } from 'react'

const LearnGoalPage = ({
  params
}: {
  params: { goal: '20' | '50' | '80' | '100' }
}) => {
  const { dispatch } = useAppContext()
  const { data: session, status } = useSession()
  
  if (!params.goal || !session) return null // TODO add error handling for this

  // Uses goal from params and user.id from jwt session to fetch words and adds them to react context state
  useEffect(() => {
    const getLearnWords = async () => {
      if (!session) return

      try {
        // This function gets words AND uses user id to start a review session in the DB
        const fetchedWords = await fetchWords({
          userId: session.user.id,
          sessionWordGoal: +params.goal
        })

        // Map through fetched words to add seenToday and newSentencesArray properties
        if (fetchedWords.result) {
          const fetchedWordsSeenToday = fetchedWords.result.map(
            (word: ReviewResultDocument) => ({
              ...word,
              seenToday: false,
              newSentencesArray: []
            })
          )
          dispatch({ type: 'loadWords', fetchedWords: fetchedWordsSeenToday })
        }

        // Dispatch the fetched words to the context
      } catch (error) {
        console.error('Error fetching words:', error)
      }
    }

    getLearnWords()
  }, [dispatch, session, params.goal])

  return (
    <main className='flex h-[calc(100vh-64px)] flex-col items-center justify-center'>
      <ReviewContainer userId={session.user.id} />
    </main>
  )
}

export default LearnGoalPage
