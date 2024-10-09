'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect, useState } from 'react'
import { ReviewResultDocument } from '@/types/review.types'
import WordCard from '../cards/WordCard'
import SentenceCard from '../cards/SentenceCard'
// import EndLearnSession from '../buttons/EndLearnSession'

type WordCardProps = {
  fetchedWords: ReviewResultDocument[]
  userId: string
}

const ReviewContainer = ({ fetchedWords }: WordCardProps) => {
  const { dispatch, unfinishedWords, loading } = useAppContext()
  const [showSentence, setShowSentence] = useState(false)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    dispatch({ type: 'loadWords', fetchedWords: fetchedWords })
  }, [dispatch, fetchedWords])

  if (loading || !unfinishedWords) {
    return <p>Loading...</p>
  }

  if (unfinishedWords.length === 0) {
    return <p>Session complete.</p>
  }

  console.log('unfinishedWords in ReviewContainer', unfinishedWords)

  return (
    <section className='mt-6 flex w-full flex-grow flex-col items-center justify-center'>
      {/* <EndLearnSession userId={userId} /> */}
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
