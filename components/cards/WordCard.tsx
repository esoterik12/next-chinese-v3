'use client'
import DefaultButton from '../buttons/DefaultButton'
import { AnimatePresence } from 'framer-motion'
import ResultButton from '../buttons/ResultButton'
import IconDownChevron from '../icons/IconDownChevron'
import AnimatedSection from './AnimatedSection'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { SetStateAction, useState, useCallback } from 'react'
import CorrectButton from '../buttons/CorrectButton'
import IconXCircle from '../icons/IconXCircle'
import IconCheckCircle from '../icons/IconCheckCircle'
import { useKeyboard } from '@/lib/custom-hooks/useKeyboard'
import useVoices from '@/lib/custom-hooks/useVoice'
import { ShowSentenceOptions } from '../learn/ActiveLearnSession'
import AnimatedToggle from './AnimatedToggle'

interface WordCardProps {
  setShowSent: React.Dispatch<SetStateAction<ShowSentenceOptions>>
  fetching: boolean
}

const WordCard = ({ fetching, setShowSent }: WordCardProps) => {
  const [show, setShow] = useState(false)
  const { dispatch, unfinishedWords, characterState } = useAppContext()
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

  const handleResult = (result: number) => {
    completeCard()
    dispatch({
      type: 'firstResult',
      firstResult: result
    })
  }

  const handleCorrect = () => {
    completeCard()
    dispatch({
      type: 'correctResult'
    })
  }

  const handleIncorrect = () => {
    completeCard()
    dispatch({
      type: 'incorrectResult'
    })
  }

  // Custom hook for keyboard input adapted from dev.to post
  useKeyboard({ show, fetching, completeCard, handleShow, voice })

  return (
    <div className='custom-gradient-background custom-border h-[380px] w-[270px]'>
      {/* Word section - fixed height */}
      <AnimatedSection
        classes='flex h-[130px] flex-col items-center justify-end gap-y-4 text-center'
        motionKey='words'
      >
        <>
          {characterState === 'traditional' ? (
            <AnimatedToggle key='traditionalWordTop'>
              <p className='custom-header'>
                {unfinishedWords[0].wordTraditional}
              </p>
            </AnimatedToggle>
          ) : (
            <AnimatedToggle key='simplifiedWordTop'>
              <p className='custom-header'>
                {unfinishedWords[0].wordSimplified}
              </p>
            </AnimatedToggle>
          )}
          {/* <p className='custom-header'>
            {characterState === 'traditional'
              ? unfinishedWords[0].wordTraditional
              : unfinishedWords[0].wordSimplified}
          </p> */}
          {characterState === 'traditional' ? (
            <AnimatedToggle key='traditionalWordBot'>
              <p>{unfinishedWords[0].wordSimplified}</p>
            </AnimatedToggle>
          ) : (
            <AnimatedToggle key='simplifiedWordBot'>
              <p>{unfinishedWords[0].wordTraditional}</p>
            </AnimatedToggle>
          )}
        </>
      </AnimatedSection>

      <div className='flex h-[250px] flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
          {!show && (
            <AnimatedSection motionKey='button'>
              <DefaultButton handleClick={handleShow} customClasses='mb-14 p-2'>
                <IconDownChevron classes='h-6 w-6 text-gray-400' />
              </DefaultButton>
            </AnimatedSection>
          )}

          {show && (
            <AnimatedSection
              classes='h-full flex-col items-stretch mt-10 justify-between text-center'
              motionKey='answer'
            >
              <>
                <h1 className='font-bold text-sky-400'>
                  {unfinishedWords[0].partOfSpeech}
                </h1>
                <div>
                  <p>{show && unfinishedWords[0].wordPinyin}</p>
                  <p className='custom-gray-text'>
                    {show && unfinishedWords[0].wordTranslation}
                  </p>
                </div>

                {!unfinishedWords[0].seenToday && (
                  <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-1'>
                    <ResultButton
                      disabled={fetching}
                      handleClick={() => handleResult(1)}
                      text='1'
                      textColor='text-rose-600'
                    />
                    <ResultButton
                      disabled={fetching}
                      handleClick={() => handleResult(2)}
                      text='2'
                      textColor='text-rose-400'
                    />
                    <ResultButton
                      disabled={fetching}
                      handleClick={() => handleResult(3)}
                      text='3'
                      textColor='text-sky-300'
                    />
                    <ResultButton
                      disabled={fetching}
                      handleClick={() => handleResult(4)}
                      text='4'
                      textColor='text-sky-400'
                    />
                    <ResultButton
                      disabled={fetching}
                      handleClick={() => handleResult(5)}
                      text='5'
                      textColor='text-sky-500'
                    />
                  </div>
                )}
                {unfinishedWords[0].seenToday && (
                  <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-2'>
                    <CorrectButton
                      disabled={fetching}
                      handleClick={() => handleIncorrect()}
                      icon={<IconXCircle classes='h-6 w-6' />}
                      textColor='text-rose-500'
                    />
                    <CorrectButton
                      disabled={fetching}
                      handleClick={() => handleCorrect()}
                      icon={<IconCheckCircle classes='h-6 w-6' />}
                      textColor='text-emerald-500'
                    />
                  </div>
                )}
              </>
            </AnimatedSection>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WordCard
