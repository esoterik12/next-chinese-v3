'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect, useState } from 'react'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconSettings from '../icons/IconSettings'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import { useRouter } from 'next/navigation'
import EndLearnSession from '../buttons/EndLearnSession'
// import EndLearnSession from '../buttons/EndLearnSession'

type WordCardProps = {
  userId: string
}

const ReviewContainer = ({ userId }: WordCardProps) => {
  const { unfinishedWords, finishedWords, loading } = useAppContext()
  const [showSentence, setShowSentence] = useState(false)
  const [fetching, setFetching] = useState(false)
  const router = useRouter()

  if (loading) {
    return <p>Loading...</p>
  }

  const buttonStyles =
    'h-6 w-6 text-gray-400 rounded-full transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  return (
    <section className='flex w-full flex-grow flex-col items-center'>
      <div className='mr-1 flex h-16 w-full justify-end gap-1 p-2'>
        <IconSettings classes={buttonStyles} />
        <EndLearnSession userId={userId} />
      </div>
      <WordCard fetching={fetching} setShowSentence={setShowSentence} />
      <SentenceCard
        showSentence={showSentence}
        setShowSentence={setShowSentence}
        fetching={fetching}
        setFetching={setFetching}
      />
    </section>
  )
}

export default ReviewContainer
