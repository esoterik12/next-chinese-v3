'use client'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import JoyrideMain from '../joyride/JoyrideMain'
import OpenGrammarModal from '../grammar/OpenGrammarModal'
import KnownButton from '../buttons/KnownButton'

interface ActiveLearnSessionProps {
  userId: string
  goal: number
  latestWord: number
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ActiveLearnSession = ({
  userId,
  goal,
  latestWord
}: ActiveLearnSessionProps) => {
  const { unfinishedWords } = useReviewContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
  const [show, setShow] = useState(false)
  const [fetching, setFetching] = useState(false)

  return (
    <section className='flex h-full w-full flex-col items-center'>
      <ProgressBar goal={goal} progress={goal - unfinishedWords.length} />

      <div className='flex w-full flex-row items-center justify-between'>
        <KnownButton setShow={setShow} setShowSent={setShowSent} />
        <OpenGrammarModal modalVersion='activeLearnSession' />
      </div>
      <JoyrideMain />
      <div className='flex w-full flex-col items-center'>
        {unfinishedWords.length > 0 && (
          <>
            <WordCard
              userId={userId}
              fetching={fetching}
              setShowSent={setShowSent}
              latestWord={latestWord}
              show={show}
              setShow={setShow}
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
