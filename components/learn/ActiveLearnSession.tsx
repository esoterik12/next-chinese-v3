'use client'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconSettings from '../icons/IconSettings'
import EndLearnSession from '../buttons/EndLearnSession'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useState } from 'react'
import ToggleCharacters from '../buttons/ToggleCharacters'

interface ActiveLearnSessionProps {
  userId: string
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ActiveLearnSession = ({ userId }: ActiveLearnSessionProps) => {
  const { unfinishedWords } = useAppContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
  const [fetching, setFetching] = useState(false)

  const buttonStyles =
    'mt-1 h-6 w-6 text-gray-400 rounded-full transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  return (
    <div className='flex w-full flex-grow flex-col items-center'>
      <div className='mr-1 flex h-14 w-full justify-end gap-2 p-2'>
        <ToggleCharacters />
        <IconSettings classes={buttonStyles} />
        <EndLearnSession userId={userId} />
      </div>
      {unfinishedWords.length > 0 && (
        <>
          <WordCard fetching={fetching} setShowSent={setShowSent} />
          <SentenceCard
            showSent={showSent}
            setShowSent={setShowSent}
            fetching={fetching}
            setFetching={setFetching}
          />
        </>
      )}
    </div>
  )
}

export default ActiveLearnSession
