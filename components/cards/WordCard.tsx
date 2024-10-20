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
import EndLearnSession from '../buttons/EndLearnSession'
import ToggleCharacters from '../buttons/ToggleCharacters'

interface WordCardProps {
  setShowSent: React.Dispatch<SetStateAction<ShowSentenceOptions>>
  fetching: boolean
  userId: string
}

const WordCard = ({ fetching, setShowSent, userId }: WordCardProps) => {
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
    <div className='custom-gradient-background custom-border mt-14 h-[400px] w-[290px]'>
      {/* Top Word section - fixed height */}
      <div className='mx-1 flex h-[60px] justify-between p-2'>
        <ToggleCharacters />
        <EndLearnSession userId={userId} />
      </div>

      <div className='flex h-[100px] flex-col items-center justify-end gap-y-4 text-center'>
        <>
          {characterState === 'traditional' ? (
            <p className='text-[42px] font-bold'>
              {unfinishedWords[0].wordTraditional}
            </p>
          ) : (
            <p className='text-[42px] font-bold'>
              {unfinishedWords[0].wordSimplified}
            </p>
          )}
          {characterState === 'traditional' ? (
            <p className='custom-large-text'>
              {unfinishedWords[0].wordSimplified}
            </p>
          ) : (
            <p className='custom-large-text'>
              {unfinishedWords[0].wordTraditional}
            </p>
          )}
        </>
      </div>

      {/* Bottom Section */}
      <div className='flex h-[240px] flex-col items-center justify-center'>
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
              classes='h-full flex-col mt-14 justify-between text-center'
              motionKey='answer'
            >
              <>
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
