'use client'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { useEffect, useState } from 'react'
import { ReviewResultDocument } from '@/types/review.types'
import WordCard from '../cards/WordCard'

type WordCardProps = {
  fetchedWords: ReviewResultDocument[]
}

const ReviewContainer = ({ fetchedWords }: WordCardProps) => {
  const { dispatch, unfinishedWords, loading } = useAppContext()

  useEffect(() => {
    dispatch({ type: 'loadWords', fetchedWords: fetchedWords })
  }, [])

  if (loading || !unfinishedWords) {
    return <p>Loading...</p>
  }

  if (unfinishedWords.length === 0) {
    return <p>Session complete.</p>
  }

  return (
    <>
      <WordCard />
    </>
  )
}

export default ReviewContainer
