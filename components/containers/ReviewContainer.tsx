'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect, useState } from 'react'
import { ReviewResultDocument } from '@/types/review.types'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
import IconPower from '../icons/IconPower'
import IconSettings from '../icons/IconSettings'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
// import EndLearnSession from '../buttons/EndLearnSession'

type WordCardProps = {
  fetchedWords: ReviewResultDocument[]
  userId: string
}

const ReviewContainer = ({ fetchedWords, userId }: WordCardProps) => {
  const { dispatch, unfinishedWords, finishedWords, loading } = useAppContext()
  const [showSentence, setShowSentence] = useState(false)
  const [fetching, setFetching] = useState(false)

  // Loads words to state on first render
  useEffect(() => {
    dispatch({ type: 'loadWords', fetchedWords: fetchedWords })
  }, [dispatch, fetchedWords])

  // Sends update when unfinishedWords.length === 0
  useEffect(() => {
    // Ensure loading Effect

    // LEFT HERE: this is working partially, seems the state data is wrong
    // Bug in context - review history
    // Check repetitions 
    const sendUpdate = async () => {
      if (unfinishedWords.length === 0) {
        console.log('Sending update of finished words in useEffect sendUpdate: ', finishedWords)
        // TODO: Improve error handling
        try {
          await endLearnSession({ userId, finishedWords })
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

  console.log('unfinishedWords in ReviewContainer', unfinishedWords)

  const buttonStyles =
    'h-6 w-6 text-gray-400 rounded-full transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  return (
    <section className='flex w-full flex-grow flex-col items-center'>
      <div className='mr-1 flex h-16 w-full justify-end gap-1 p-2'>
        <IconSettings classes={buttonStyles} />
        <IconPower classes={buttonStyles} />
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
