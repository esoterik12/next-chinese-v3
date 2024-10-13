'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useState, useEffect } from 'react'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconSettings from '../icons/IconSettings'
import { useRouter } from 'next/navigation'
import EndLearnSession from '../buttons/EndLearnSession'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'

type WordCardProps = {
  userId: string
  goal: string
}

const ReviewContainer = ({ userId, goal }: WordCardProps) => {
  const {
    unfinishedWords,
    finishedWords,
    loadingState,
    userLatestWord,
    dispatch
  } = useAppContext()
  const [showSentence, setShowSentence] = useState(false)
  const [fetching, setFetching] = useState(false)
  const router = useRouter()

  // Sends update when unfinishedWords.length === 0
  useEffect(() => {
    if (finishedWords.length !== Number(goal)) return

    const sendUpdate = async () => {
      try {
        await endLearnSession({ userId, finishedWords, userLatestWord })
        dispatch({ type: 'resetState' })
        router.push('/')
      } catch (error) {
        console.error('Error sending update:', error)
      }
    }

    sendUpdate()
  }, [finishedWords, goal])

  if (loadingState) {
    return <p>Loading...</p>
  }

  if (finishedWords.length === +goal) {
    return <p>Session complete.</p>
  }

  // console.log('unfinishedWords in ReviewContainer.tsx', unfinishedWords)
  // console.log('finishedWords in ReviewContainer.tsx', finishedWords)

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
