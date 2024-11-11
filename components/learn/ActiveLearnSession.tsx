'use client'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import { useState } from 'react'

interface ActiveLearnSessionProps {
  userId: string
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ActiveLearnSession = ({ userId }: ActiveLearnSessionProps) => {
  const { unfinishedWords } = useReviewContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
  const [fetching, setFetching] = useState(false)

  return (
    <section className='flex w-full flex-grow flex-row items-center'>
      <div className='flex w-full flex-grow flex-col items-center'>
        {unfinishedWords.length > 0 && (
          <>
            <WordCard
              userId={userId}
              fetching={fetching}
              setShowSent={setShowSent}
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
    </section>
  )
}

export default ActiveLearnSession
