'use client'
import DefaultButton from '../buttons/DefaultButton'
import { SetStateAction, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import generateSentence from '@/lib/actions/sentences/generateSentence'

export interface SentenceProps {
  sentTraditional: string
  sentSimplified: string
  sentPinyin: string
  sentTranslation: string
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
    useState<SentenceProps | null>(null)

    console.log('unfinishedWords in SentenceCard.tsx', unfinishedWords)

  // useCallback memoizes the handleSentence function, stops unnecessary re-renders
  // useEffect only triggers when showSentence or unfinishedWords change.
  const handleSentence = useCallback(async () => {
    // TODO: If there is an existing sentence from the DB
    // Add clause here to use existing sentence
    if (unfinishedWords[0].newSentencesArray.length > 0) {
      setSentenceData(unfinishedWords[0].newSentencesArray[0])
      // Else generate new sentence
    } else {
      setFetching(true)
      const sentenceResult = await generateSentence({
        word: unfinishedWords[0].wordTraditional,
        level: unfinishedWords[0].tocflLevel
      })
      dispatch({ type: 'addSentence', newSentence: sentenceResult.result })
      setSentenceData(sentenceResult.result)
      setFetching(false)
    }

    setShowSentence(true)
  }, [unfinishedWords, dispatch, setFetching, setShowSentence])

  // Allows for c key to trigger sentence generation
  useEffect(() => {
    const keyDownHandler = async (e: globalThis.KeyboardEvent) => {
      if (!showSentence && e.key === 'c') {
        await handleSentence()
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
                {sentenceData.sentTraditional}
              </p>
              <p className='custom-small-text'>{sentenceData.sentPinyin}</p>
              <p className='custom-small-text custom-gray-text'>
                {sentenceData.sentTranslation}
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
