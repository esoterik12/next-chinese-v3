'use client'
import DefaultButton from '../buttons/DefaultButton'
import { AnimatePresence } from 'framer-motion'
import ResultButton from '../buttons/ResultButton'
import IconDownChevron from '../icons/IconDownChevron'
import AnimatedSection from './AnimatedSection'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import { SetStateAction, useState, useCallback } from 'react'
import CorrectButton from '../buttons/CorrectButton'
import IconXCircle from '../icons/IconXCircle'
import IconCheckCircle from '../icons/IconCheckCircle'
import { useKeyboard } from '@/lib/custom-hooks/useKeyboard'
import useVoices from '@/lib/custom-hooks/useVoice'
import { ShowSentenceOptions } from '../learn/ActiveLearnSession'
import EndLearnSession from '../buttons/EndLearnSession'
import ToggleCharacters from '../buttons/ToggleCharacters'

interface WordCardProps {
  setShowSent: React.Dispatch<SetStateAction<ShowSentenceOptions>>
  fetching: boolean
  userId: string
  latestWord: number
}

const WordCard = ({
  fetching,
  setShowSent,
  userId,
  latestWord
}: WordCardProps) => {
  const [show, setShow] = useState(false)
  const { dispatch, unfinishedWords, characterState } = useReviewContext()
  const voice = useVoices()

  const handleShow = useCallback(() => {
    if (
      unfinishedWords &&
      unfinishedWords.length > 0 &&
      unfinishedWords[0].wordTraditional
    ) {
      const speech = new SpeechSynthesisUtterance(
        unfinishedWords[0].wordTraditional
      )

      if (voice) {
        speech.voice = voice
      } else {
        console.log('Voice not found; make sure you are using Chrome.')
      }

      speechSynthesis.speak(speech)
      setShow(true)
    } else {
      console.log('Speech data is not available yet.')
    }
  }, [unfinishedWords, voice])

  // General function to clear up ui after each card
  const completeCard = () => {
    setShow(false)
    setShowSent('hidden')
  }

  const handleResult = (
    result: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    completeCard()
    dispatch({
      type: 'firstResult',
      firstResult: result
    })
    e.currentTarget.blur()
  }

  const handleCorrect = (e: React.MouseEvent<HTMLButtonElement>) => {
    completeCard()
    dispatch({
      type: 'correctResult'
    })
    e.currentTarget.blur()
  }

  const handleIncorrect = (e: React.MouseEvent<HTMLButtonElement>) => {
    completeCard()
    dispatch({
      type: 'incorrectResult'
    })
    e.currentTarget.blur()
  }

  // Custom hook for keyboard input adapted from dev.to post
  useKeyboard({ show, fetching, completeCard, handleShow, voice })

  return (
    <div className='custom-dark-background mt-2 h-[400px] w-[290px] custom-dark-border'>
      {/* Top Word section - fixed height */}
      <div className='mx-1 flex h-[60px] justify-between p-2'>
        <ToggleCharacters id='toggleCharacters' />
        <EndLearnSession
          id='endLearnSession'
          userId={userId}
          latestWord={latestWord}
        />
      </div>

      {/* Middle Main Section */}
      <div
        id='wordContainer'
        className='flex h-[100px] flex-col items-center text-center'
      >
        <>
          {characterState === 'traditional' ? (
            <p className='text-[42px]'>{unfinishedWords[0].wordTraditional}</p>
          ) : (
            <p className='text-[42px]'>{unfinishedWords[0].wordSimplified}</p>
          )}
          {characterState === 'traditional' ? (
            <p className='custom-large-text font-light text-gray-500'>
              {unfinishedWords[0].wordSimplified}
            </p>
          ) : (
            <p className='custom-large-text font-light text-gray-500'>
              {unfinishedWords[0].wordTraditional}
            </p>
          )}
        </>
      </div>

      {/* Bottom Section */}
      <div className='flex h-[183px] flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
          {!show && (
            <AnimatedSection classes='mb-8' motionKey='button'>
              <DefaultButton
                id='showButton'
                handleClick={handleShow}
                customClasses='p-2'
              >
                <IconDownChevron classes='h-6 w-6 text-gray-400' />
              </DefaultButton>
            </AnimatedSection>
          )}

          {show && (
            <AnimatedSection
              classes='h-full flex-col mt-9 justify-between text-center'
              motionKey='answer'
            >
              <div>
                <h1 className='custom-large-text font-bold'>
                  {unfinishedWords[0].partOfSpeech}
                </h1>

                <p className='custom-large-text'>
                  {show && unfinishedWords[0].wordPinyin}
                </p>
                <p className='custom-large-text custom-gray-text'>
                  {show && unfinishedWords[0].wordTranslation}
                </p>
              </div>
            </AnimatedSection>
          )}
        </AnimatePresence>
      </div>
      <div className='mx-2 flex h-[57px] flex-col items-center justify-center'>
        {!unfinishedWords[0].seenToday && (
          <div
            id='resultsButtons'
            className='mb-3 flex w-full flex-row items-center justify-between gap-x-1'
          >
            <ResultButton
              disabled={fetching}
              handleClick={e => handleResult(1, e)}
              text='1'
              textColor='text-rose-600'
            />
            <ResultButton
              disabled={fetching}
              handleClick={e => handleResult(2, e)}
              text='2'
              textColor='text-rose-400'
            />
            <ResultButton
              disabled={fetching}
              handleClick={e => handleResult(3, e)}
              text='3'
              textColor='text-sky-300'
            />
            <ResultButton
              disabled={fetching}
              handleClick={e => handleResult(4, e)}
              text='4'
              textColor='text-sky-400'
            />
            <ResultButton
              disabled={fetching}
              handleClick={e => handleResult(5, e)}
              text='5'
              textColor='text-sky-500'
            />
          </div>
        )}
        {unfinishedWords[0].seenToday && (
          <div className='mb-3 flex w-full flex-row items-center justify-between'>
            <CorrectButton
              disabled={fetching}
              handleClick={e => handleIncorrect(e)}
              icon={<IconXCircle classes='h-6 w-6' />}
              textColor='text-rose-500'
              keyboardKey='2'
            />
            <CorrectButton
              disabled={fetching}
              handleClick={e => handleCorrect(e)}
              icon={<IconCheckCircle classes='h-6 w-6' />}
              textColor='text-emerald-500'
              keyboardKey='4'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WordCard
