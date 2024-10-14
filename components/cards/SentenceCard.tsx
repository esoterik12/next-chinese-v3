'use client'
import DefaultButton from '../buttons/DefaultButton'
import { SetStateAction, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import generateSentence from '@/lib/actions/sentences/generateSentence'
import { SentenceProps } from '@/types/review.types'
import { ShowSentenceOptions } from '../containers/ReviewContainer'

interface SentenceCardProps {
  showSent: ShowSentenceOptions
  setShowSent: React.Dispatch<SetStateAction<ShowSentenceOptions>>
  fetching: boolean
  setFetching: React.Dispatch<SetStateAction<boolean>>
}

const SentenceCard = ({
  showSent,
  setShowSent,
  fetching,
  setFetching
}: SentenceCardProps) => {
  const { unfinishedWords, dispatch } = useAppContext()
  const [sentenceData, setSentenceData] = useState<SentenceProps | null>(null)

  console.log('unfinishedWords in SentenceCard.tsx', unfinishedWords)

  // Memoizes handleSentence function, stops unnecessary re-renders, triggers when showSentence/unfinishedWords change.
  const handleSentence = useCallback(async () => {
    if (unfinishedWords[0].sentence) {
      // If word has existing sentence, set as sentence data
      setSentenceData(unfinishedWords[0].sentence)
    } else {
      // Else generate new sentence with GPT API
      setFetching(true)
      const sentenceResult = await generateSentence({
        word: unfinishedWords[0].wordTraditional,
        level: unfinishedWords[0].tocflLevel
      })
      // Adds the new sentence to context for saving to DB at end of session
      dispatch({ type: 'addSentence', newSentence: sentenceResult.result })
      setSentenceData(sentenceResult.result)
      setFetching(false)
    }

    setShowSent('showSentence')
  }, [unfinishedWords, dispatch, setFetching, setShowSent])

  // Allows for c key to trigger sentence generation
  useEffect(() => {
    const keyDownHandler = async (e: globalThis.KeyboardEvent) => {
      if (showSent === 'hidden' && e.key === 'c') {
        await handleSentence()
      }
      if (showSent === 'showSentence' && e.key === 'c') {
        setShowSent('showTranslation')
      }
    }
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [showSent, handleSentence])

  return (
    <div className='mt-2 flex h-[120px] w-full flex-col items-center'>
      <AnimatePresence mode='wait'>
        {showSent === 'hidden' && (
          <AnimatedSection key='sentenceButton'>
            <DefaultButton
              handleClick={handleSentence}
              customClasses='custom-hover-effect bg-gray-900 p-2 w-[270px]'
            >
              {!fetching ? (
                <p className='text-center'>Context</p>
              ) : (
                <p className='text-center'>Generating</p>
              )}
            </DefaultButton>
          </AnimatedSection>
        )}

        {(showSent === 'showSentence' || showSent === 'showTranslation') &&
          sentenceData && (
            <AnimatedSection
              key='sentenceAnswer'
              classes='flex flex-col gap-1 pt-4'
            >
              <>
                {/* This ml is to offset the issue of the Chinese period taking up full character length and making it not seem centered. */}
                <button onClick={() => setShowSent('showTranslation')}>
                  <p
                    className={`custom-large-text ml-2 ${showSent === 'showSentence' ? `transition-colors duration-300 hover:cursor-pointer hover:text-sky-500` : ``}`}
                  >
                    {sentenceData.sentTraditional}
                  </p>
                </button>
              </>
            </AnimatedSection>
          )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {showSent === 'showTranslation' && sentenceData && (
          <AnimatedSection
            key='sentenceTranslation'
            classes='flex flex-col gap-1 pt-1'
          >
            <>
              <p className='custom-small-text'>{sentenceData.sentPinyin}</p>
              <p className='custom-small-text custom-gray-text'>
                {sentenceData.sentTranslation}
              </p>
            </>
          </AnimatedSection>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SentenceCard
