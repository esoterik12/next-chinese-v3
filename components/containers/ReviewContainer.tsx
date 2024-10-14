'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useState, useEffect } from 'react'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconSettings from '../icons/IconSettings'
import { useRouter } from 'next/navigation'
import EndLearnSession from '../buttons/EndLearnSession'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import Loading from '../shared/Loading'

type WordCardProps = {
  userId: string
  goal: string
}

export type ShowSentenceOptions = 'hidden' | 'showSentence' | 'showTranslation'

const ReviewContainer = ({ userId, goal }: WordCardProps) => {
  const { finishedWords, loadingState, userLatestWord, dispatch } =
    useAppContext()
  const [showSent, setShowSent] = useState<ShowSentenceOptions>('hidden')
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
  }, [finishedWords, goal, dispatch, router, userId, userLatestWord])

  if (loadingState) {
    return (
      <section className='flex h-full w-full flex-grow flex-col items-center justify-center'>
        <p>Loading...</p>
        <Loading />
      </section>
    )
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
      <WordCard
        fetching={fetching}
        setShowSent={setShowSent}
      />
      <SentenceCard
        showSent={showSent}
        setShowSent={setShowSent}
        fetching={fetching}
        setFetching={setFetching}
      />
    </section>
  )
}

export default ReviewContainer
