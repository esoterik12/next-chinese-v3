'use client'
import React, { useMemo, useState } from 'react'
import IconViews from '@/components/icons/IconViews'
import StatsContainer from '@/components/containers/StatsContainer'
import IconStars from '../icons/IconStars'
import IconTime from '../icons/IconTime'
import AnimatedSection from '../cards/AnimatedSection'
import { useEffect } from 'react'
import { useAppContext } from '@/lib/context/ReviewSessionContext'
import { ReviewResultDocument } from '@/types/review.types'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import DefaultButton from '../buttons/DefaultButton'
import sortByDate from '@/lib/utils/sortByDate'
import { formatDuration } from '@/lib/utils/formatDuration'
import WordResultCard from '../cards/WordResultCard'
import IconResults from '../icons/IconResults'
import InlineError from '../shared/InlineError'

interface CompletedLearnSession {
  userId: string
  latestWord: number
}

const CompletedLearnSession = ({
  userId,
  latestWord
}: CompletedLearnSession) => {
  const { finishedWords, dispatch, startTime, error, characterState } =
    useAppContext()
  const [completedTime, setCompletedTime] = useState('')
  const [hoveredWordState, setHoveredWordStats] =
    useState<ReviewResultDocument>(null)
  const [completedState, setCompletedState] = useState<ReviewResultDocument[]>(
    []
  )

  // Updates local completedState with results
  // Sends endLearnSession to update DB
  useEffect(() => {
    // Create a new sorted array and set the state with sortByDate util fn
    const sortedDateWords = finishedWords.sort(sortByDate)
    setCompletedState(sortedDateWords)
    setHoveredWordStats(sortedDateWords[0])
    setCompletedTime(formatDuration(new Date(startTime)))

    const sendUpdate = async () => {
      try {
        await endLearnSession({ userId, finishedWords, latestWord })
      } catch (error) {
        dispatch({
          type: 'setError',
          error: 'Error ending session. Data may have been lost.'
        })
        console.error('Error sending update:', error)
      }
    }

    sendUpdate()
  }, [finishedWords, dispatch, userId, latestWord, startTime])

  // useEffect to trigger when page unloads
  useEffect(() => {
    const handleBeforeUnload = event => {
      dispatch({ type: 'resetState' })
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [dispatch])

  const handleReset = () => {
    dispatch({ type: 'resetState' })
  }

  const handleMouseEnter = (word: ReviewResultDocument) => {
    setHoveredWordStats(word)
  }

  const newWordsCount = useMemo(() => {
    return completedState.filter(word => word.reviewHistory.length === 1).length
  }, [completedState])

  const correctWordsCount = useMemo(() => {
    return completedState.filter(
      word => word.reviewHistory[word.reviewHistory.length - 1].quality >= 3
    ).length
  }, [completedState])

  const incorrectCount = useMemo(() => {
    return completedState.filter(
      word => word.reviewHistory[word.reviewHistory.length - 1].quality <= 2
    ).length
  }, [completedState])

  if (error) {
    return (
      <section className='flex flex-col p-6'>
        <h1 className='md:custom-header custom-subheader py-2'>
          {characterState === 'traditional' ? '對不起' : '对不起'}&nbsp;-
          Something went wrong.
        </h1>
        <div className='flex flex-row'>
          <DefaultButton
            handleClick={() => handleReset()}
            customClasses='md:w-[138px] w-[128px] border-2 border-sky-500 p-2'
          >
            <p className='font-semibold'>Reset</p>
          </DefaultButton>
          <InlineError initialX={-10} initialY={0} classes='p-2 text-rose-500'>
            {error}
          </InlineError>
        </div>
      </section>
    )
  }

  return (
    <AnimatedSection
      entryTransition={0.55}
      entryDelay={0.25}
      initialY={-20}
      easeType={[0.22, 0, 0.42, 1]}
      classes='flex flex-col p-6'
    >
      <>
        <div className='flex-grow'>
          <h1 className='md:custom-header custom-subheader py-2'>
            Session complete.
          </h1>

          {/* Main stats boxes */}
          <div className='flex flex-col flex-wrap gap-4 md:flex-row'>
            <StatsContainer
              width='w-[260px]'
              icon={<IconViews classes='w-6 h-6 text-sky-500' />}
              titleText='Words seen:'
              valueText={completedState.length}
            />
            <StatsContainer
              width='w-[260px]'
              icon={<IconStars classes='w-6 h-6 text-emerald-500' />}
              titleText='New words:'
              valueText={newWordsCount}
            />
            <StatsContainer
              width='w-[260px]'
              icon={<IconTime classes='w-6 h-6 text-rose-500' />}
              titleText='Time:'
              valueText={completedTime}
            />
          </div>

          {/* Session result visual */}

          <div className='mb-4 mt-4 flex flex-col-reverse gap-4 md:flex-row'>
            {hoveredWordState !== null && (
              <WordResultCard word={hoveredWordState} />
            )}
            <div className='flex w-[260px] flex-col justify-between rounded-xl border-gray-500 bg-gray-900 p-2 md:w-[535px]'>
              <div>
                <p className='flex flex-row gap-x-2 pb-2'>
                  <IconResults classes='h-6 w-6 text-gray-500' />
                  Session results:
                </p>
                <div className='flex min-w-[245px] flex-row flex-wrap gap-1'>
                  {finishedWords.map((item, idx) => (
                    <div
                      onMouseEnter={() => handleMouseEnter(item)}
                      className={`flex h-[16px] w-[16px] items-center justify-center rounded-md p-2 md:h-[26px] md:w-[26px] ${hoveredWordState && item._id === hoveredWordState._id ? 'border border-gray-200' : ''} ${
                        item.reviewHistory[item.reviewHistory.length - 1]
                          .quality >= 4
                          ? 'bg-emerald-500'
                          : item.reviewHistory[item.reviewHistory.length - 1]
                                .quality === 3
                            ? 'bg-sky-500'
                            : 'bg-rose-500'
                      }`}
                      key={idx}
                    ></div>
                  ))}
                </div>
              </div>

              <div className='flex flex-row gap-x-6'>
                <p>
                  <span className='text-gray-500'>Correct:</span>
                  <span className='text-emerald-500 font-semibold'>
                    &nbsp;{correctWordsCount}
                  </span>
                </p>
                <p>
                  <span className='text-gray-500'>Incorrect:</span>
                  <span className='text-rose-500 font-semibold'>&nbsp;{incorrectCount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Close section */}
        <div className=''>
          <DefaultButton
            handleClick={() => handleReset()}
            customClasses='w-[138px] border-2 border-gray-400 p-2'
          >
            <p>Close</p>
          </DefaultButton>
        </div>
      </>
    </AnimatedSection>
  )
}

export default CompletedLearnSession
