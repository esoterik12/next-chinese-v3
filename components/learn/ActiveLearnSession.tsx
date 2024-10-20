'use client'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useState, useEffect } from 'react'

interface ActiveLearnSessionProps {
  userId: string
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ActiveLearnSession = ({ userId }: ActiveLearnSessionProps) => {
  const { unfinishedWords, dispatch } = useAppContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
  const [fetching, setFetching] = useState(false)

  return (
    <section className='flex w-full flex-grow flex-row items-center'>
      {/* <div className=''>
        <p>Hold instruction</p>
      </div> */}
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
      {/* <div></div> */}
    </section>
  )
}

export default ActiveLearnSession
