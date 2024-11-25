'use client'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import JoyrideMain from '../joyride/JoyrideMain'

interface ActiveLearnSessionProps {
  userId: string
  goal: number
  latestWord: number
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ActiveLearnSession = ({ userId, goal, latestWord }: ActiveLearnSessionProps) => {
  const { unfinishedWords } = useReviewContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
  const [fetching, setFetching] = useState(false)

  return (
    <section className='flex w-full h-full flex-col items-center'>
      <JoyrideMain />
      <div className='flex w-full flex-col items-center'>
        {unfinishedWords.length > 0 && (
          <>
            <WordCard
              userId={userId}
              fetching={fetching}
              setShowSent={setShowSent}
              latestWord={latestWord}
            />
            <SentenceCard
              showSent={showSent}
              setShowSent={setShowSent}
              fetching={fetching}
              setFetching={setFetching}
            />
          </>
        )}
      </div>
      <ProgressBar goal={goal} progress={goal - unfinishedWords.length}/>
    </section>
  )
}

export default ActiveLearnSession
