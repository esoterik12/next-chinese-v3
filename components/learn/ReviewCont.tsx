'use client'
import React, { useState } from 'react'
import PrepLearnSession from './PrepLearnSession'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import ActiveLearnSession from './ActiveLearnSession'
import CompletedLearnSession from './CompletedLearnSession'

interface ReviewContProps {
  userId: string // converted from ObjectId in page.tsx
  name: string // from NextAuth session
  wordsDueCount: number
  latestWord: number
}

const ReviewCont = ({
  userId,
  name,
  wordsDueCount,
  latestWord
}: ReviewContProps) => {
  const { progress } = useAppContext()
  const [goal, setGoal] = useState<number>(50)

  return (
    <>
      {/* IF ready show this - set ready to 'running' in handleStart in PrepLearnSession */}
      {progress === 'ready' && (
        <PrepLearnSession
          userId={userId}
          goal={goal}
          setGoal={setGoal}
          wordsDueCount={wordsDueCount}
          name={name}
          latestWord={latestWord}
        />
      )}

      {/* If 'running' show ActiveLearnSession with WordCard and SentenceCard */}
      {progress === 'running' && <ActiveLearnSession userId={userId} />}

      {/* If 'completed' show the CompletedLearnSession */}
      {progress === 'completed' && <CompletedLearnSession userId={userId} />}
    </>
  )
}

export default ReviewCont
