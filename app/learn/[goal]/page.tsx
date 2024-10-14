'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import ReviewContainer from '@/components/containers/ReviewContainer'
import { fetchWords } from '@/lib/actions/words/fetchWords'
import { ReviewResultDocument } from '@/types/review.types'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect } from 'react'
import InlineError from '@/components/shared/InlineError'
import PageContainer from '@/components/containers/PageContainer'

const LearnGoalPage = ({ params }: { params: { goal: string } }) => {
  const { dispatch, finishedWords } = useAppContext()
  const { data: session } = useSession()
  const [error, setError] = useState<string | null>(null)

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
          // Add words and latestWord to app context
          dispatch({
            type: 'loadWords',
            fetchedWords: fetchedWordsSeenToday,
            userLatestWord: learnSessionData.result.userLatestWord
          })
        }
      } catch (error) {
        setError('Error loading the learning session.')
      }
    }

    getLearnWords()
  }, [dispatch, session, params.goal])

  if (!['5', '20', '50', '80', '100'].includes(params.goal))
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p className='text-rose-500'>Invalid goal selected.</p>
        </InlineError>
      </PageContainer>
    )
  if (!params.goal || !session)
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p className='text-rose-500'>Invalid user session.</p>
        </InlineError>
      </PageContainer>
    )

  if (error)
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p className='text-rose-500'>{error}</p>
        </InlineError>
      </PageContainer>
    )

  return (
    <PageContainer>
      <ReviewContainer userId={session.user.id} goal={params.goal} />
    </PageContainer>
  )
}

export default LearnGoalPage
