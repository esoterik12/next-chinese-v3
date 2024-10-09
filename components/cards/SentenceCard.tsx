'use client'
import DefaultButton from '../buttons/DefaultButton'
import { SetStateAction, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import generateSentence from '@/lib/actions/generateSentence'

export interface GeneratedSentenceProps {
  pinyin: string
  simplifiedSentence: string
  traditionalSentence: string
  translation: string
}

interface SentenceCardProps {
  showSentence: boolean
  setShowSentence: React.Dispatch<SetStateAction<boolean>>
  fetching: boolean
  setFetching: React.Dispatch<SetStateAction<boolean>>
}

const SentenceCard = ({
  showSentence,
  setShowSentence,
  fetching,
  setFetching
}: SentenceCardProps) => {
  const { unfinishedWords, dispatch } = useAppContext()
  const [sentenceData, setSentenceData] =
    useState<GeneratedSentenceProps | null>(null)

  // useCallback to memoize the handleSentence function,
  // prevents unnecessary re-renders and makes sure the
  // useEffect only triggers when showSentence or unfinishedWords change.
  const handleSentence = useCallback(async () => {
    setFetching(true)
    const sentenceResult = await generateSentence({
      word: unfinishedWords[0].wordTraditional,
      level: unfinishedWords[0].tocflLevel
    })
    setFetching(false)
    setShowSentence(true)
    setSentenceData(sentenceResult.result)
    dispatch({ type: 'addSentence', newSentence: sentenceResult.result })
    return sentenceResult
  }, [unfinishedWords, dispatch, setFetching, setShowSentence])

  // Allows for c key to trigger sentence generation
  useEffect(() => {
    const keyDownHandler = async (e: globalThis.KeyboardEvent) => {
      if (!showSentence && e.key === 'c') {
        const sentenceKeyResult = await handleSentence()
        setSentenceData(sentenceKeyResult.result)
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [showSentence, handleSentence])

  return (
    <div className='mt-2 flex h-[120px] w-full flex-col items-center'>
      <AnimatePresence mode='wait'>
        {!showSentence && (
          <AnimatedSection key='sentenceButton'>
            <DefaultButton
              handleClick={handleSentence}
              customClasses='custom-hover-effect bg-gray-900 p-2 w-[270px]'
            >
              {!fetching ? (
                <p className='text-center'>Context</p>
              ) : (
                <p className='text-center'>Loading</p>
              )}
            </DefaultButton>
          </AnimatedSection>
        )}

        {showSentence && sentenceData && (
          <AnimatedSection
            key='sentenceAnswer'
            classes='flex flex-col gap-1 p-4'
          >
            <>
              {/* This ml is to offset the issue of the Chinese period taking up full character length and making it not seem centered. */}
              <p className='custom-large-text ml-2'>
                {sentenceData.traditionalSentence}
              </p>
              <p className='custom-small-text'>{sentenceData.pinyin}</p>
              <p className='custom-small-text custom-gray-text'>
                {sentenceData.translation}
              </p>
              {/* <SentenceVote
                sentenceUpvotes={dummySentenceData[0].upvotes}
                sentenceDownvotes={dummySentenceData[0].downvotes}
              /> */}
            </>
          </AnimatedSection>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SentenceCard
