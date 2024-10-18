'use client'
import React, { useState } from 'react'
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

interface CompletedLearnSession {
  userId: string
}

const CompletedLearnSession = ({ userId }: CompletedLearnSession) => {
  const { finishedWords, userLatestWord, dispatch, startTime } = useAppContext()
  const [completedTime, setCompletedTime] = useState('')
  // TODO: Create a specific type for this once design is complete
  const [hoveredWordState, setHoveredWordStats] =
    useState<ReviewResultDocument>(null)
  const [completedState, setCompletedState] = useState<ReviewResultDocument[]>(
    []
  )

  console.log('completedState in CompletedLearnSession.tsx', completedState)

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
        await endLearnSession({ userId, finishedWords, userLatestWord })
      } catch (error) {
        // TODO: add better error handling
        console.error('Error sending update:', error)
      }
    }

    sendUpdate()
  }, [finishedWords, dispatch, userId, userLatestWord, startTime])

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
    console.log('id in handleMouseEnter', word._id)
    setHoveredWordStats(word)
  }
  const handleMouseLeave = (word: ReviewResultDocument) => {
    console.log('id in handleMouseLeave', word._id)
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
          <div className='flex flex-row flex-wrap gap-4 md:gap-8'>
            <StatsContainer
              icon={<IconViews classes='w-6 h-6 text-sky-500' />}
              titleText='Words seen:'
              valueText={completedState.length}
            />
            <StatsContainer
              icon={<IconStars classes='w-6 h-6 text-emerald-500' />}
              titleText='New words:'
              valueText='12'
            />
            <StatsContainer
              icon={<IconTime classes='w-6 h-6 text-rose-500' />}
              titleText='Time:'
              valueText={completedTime}
            />
          </div>

          {/* Session result visual */}
          <div className='mt-6 max-w-[730px]'>
            <p className='py-2'>Your session results:</p>
            <div className='flex flex-row flex-wrap gap-1'>
              {finishedWords.map((item, idx) => (
                <div
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={() => handleMouseLeave(item)}
                  className={`flex h-[21px] w-[21px] items-center justify-center rounded-md p-2 ${hoveredWordState && item._id === hoveredWordState._id ? 'border border-gray-200' : ''} ${
                    item.reviewHistory[item.reviewHistory.length - 1].quality >=
                    4
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
        </div>

        {/* Word Data Section */}
        {/* <div className='mt-6 flex h-[200px] w-[220px] flex-row rounded-xl border-2 border-gray-500 bg-gray-900 p-2 md:flex-col'>
          {hoveredWordState !== null && (
            <div>
              <div className='flex flex-row gap-2'>
                <IconStars classes='h-5 w-5 text-gray-500 mt-1' />
                <p className=''>{hoveredWordState.wordTraditional}</p>
              </div>
              <div>
                <p className=''>Views: {hoveredWordState.repetitions}</p>
              </div>
            </div>
          )}
        </div> */}

        {/* Bottom Close section */}
        <div className='mt-8'>
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
