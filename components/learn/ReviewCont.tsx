'use client'
import React, { useState, useEffect } from 'react'
import PrepLearnSession from './PrepLearnSession'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import ActiveLearnSession from './ActiveLearnSession'
import CompletedLearnSession from './CompletedLearnSession'
import InlineError from '../shared/InlineError'
import EndLearnSession from '../buttons/EndLearnSession'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import { BasicUserStatsData } from '@/types/user.types'

interface ReviewContProps {
  userId: string // converted from ObjectId in page.tsx
  name: string // from NextAuth session
  wordsDueCount: number
  latestWord: number
  userStats: BasicUserStatsData[]
  preferredChars: 'traditional' | 'simplified'
}

const ReviewCont = ({
  userId,
  name,
  wordsDueCount,
  latestWord,
  userStats,
  preferredChars
}: ReviewContProps) => {
  const { progress, dispatch, finishedWords } = useReviewContext()
  const [goal, setGoal] = useState<number>(60)

  // useEffect to trigger when page unloads
  // This will still update the db with whatever words have been finished
  useEffect(() => {
    const handleBeforeUnload = async event => {
      event.returnValue = ''

      try {
        await endLearnSession({
          userId,
          latestWord,
          finishedWords,
          preferredChars
        })
      } catch (error) {
        console.error('Error ending session:', error)
      } finally {
        dispatch({ type: 'resetState' })
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [userId, latestWord, finishedWords, dispatch, preferredChars])

  if (!userId) {
    return (
      <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
        <p>Error loading session.</p>
        <EndLearnSession userId={userId} />
      </InlineError>
    )
  }

  return (
    <>
      {/* IF ready show this - set ready to 'running' in handleStart in PrepLearnSession */}
      {progress === 'ready' && (
        <PrepLearnSession
          userStats={userStats}
          userId={userId}
          goal={goal}
          setGoal={setGoal}
          wordsDueCount={wordsDueCount}
          name={name}
          latestWord={latestWord}
          preferredChars={preferredChars}
        />
      )}

      {/* If 'running' show ActiveLearnSession with WordCard and SentenceCard */}
      {progress === 'running' && <ActiveLearnSession userId={userId} goal={goal} latestWord={latestWord}  />}

      {/* If 'completed' show the CompletedLearnSession */}
      {progress === 'completed' && (
        <CompletedLearnSession
          userId={userId}
          latestWord={latestWord}
          preferredChars={preferredChars}
        />
      )}
    </>
  )
}

export default ReviewCont
