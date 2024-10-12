'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect, useState } from 'react'
import { ReviewResultDocument } from '@/types/review.types'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconSettings from '../icons/IconSettings'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import { useRouter } from 'next/navigation'
import EndLearnSession from '../buttons/EndLearnSession'
// import EndLearnSession from '../buttons/EndLearnSession'

// TEMP STORE OF OLD VERSION FOR REFERENCE

type WordCardProps = {
  fetchedWords: ReviewResultDocument[]
  userId: string
}

const ReviewContainer = ({ fetchedWords, userId }: WordCardProps) => {
  const { dispatch, unfinishedWords, finishedWords, loading } = useAppContext()
  const [showSentence, setShowSentence] = useState(false)
  const [fetching, setFetching] = useState(false)
  const router = useRouter()

  console.log('userId in review container', userId)

  // Loads words to state on first render
  useEffect(() => {
    dispatch({ type: 'loadWords', fetchedWords: fetchedWords })
  }, [dispatch, fetchedWords])

  // Sends update when unfinishedWords.length === 0
  useEffect(() => {
    // TODO Ensure loading Effect
    const sendUpdate = async () => {
      // TODO: This is a temporary conditional that SHOULD only be true if the session is
      // completed. However, not a very sturdy mechanism - Improve with fixed state
      if (unfinishedWords.length === 0 && finishedWords.length > 1) {
        console.log(
          'Sending update of finished words in useEffect sendUpdate: ',
          finishedWords
        )
        // TODO: Improve error handling
        try {
          await endLearnSession({ userId, finishedWords })
          router.push('/')
        } catch (error) {
          console.error('Error sending update:', error)
        }
      }
    }
    sendUpdate()
  }, [unfinishedWords])

  if (loading || !unfinishedWords) {
    return <p>Loading...</p>
  }

  if (unfinishedWords.length === 0) {
    return <p>Session complete.</p>
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
