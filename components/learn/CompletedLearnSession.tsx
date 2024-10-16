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

interface CompletedLearnSession {
  userId: string
}

const dummyResults = [
  1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1,
  2, 3, 4, 5, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2
]

const CompletedLearnSession = ({ userId }: CompletedLearnSession) => {
  const { finishedWords, userLatestWord, dispatch } = useAppContext()
  const [completedState, setCompletedState] = useState<ReviewResultDocument[]>(
    []
  )

  // Updates local completedState with results
  // Send endLearnSession to update DB
  useEffect(() => {
    setCompletedState(finishedWords)

    const sendUpdate = async () => {
      try {
        console.log('ending learn session: finishedWords - ', finishedWords)
        await endLearnSession({ userId, finishedWords, userLatestWord })
        // Simulate a delay of 1 second for UI purposes
        await new Promise(resolve => setTimeout(resolve, 1500))
      } catch (error) {
        // TODO: add better error handling
        console.error('Error sending update:', error)
      }
    }

    sendUpdate()
  }, [finishedWords, dispatch, userId, userLatestWord])

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

  return (
    <AnimatedSection
      entryTransition={0.55}
      entryDelay={0.25}
      initialY={-20}
      easeType={[0.22, 0, 0.42, 1]}
    >
      <section className='p-6'>
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
            valueText='07:34'
          />
        </div>

        {/* Session result visual */}
        <div className='mt-6 max-w-[730px]'>
          <p className='py-2'>Your session results:</p>
          <div className='flex flex-row flex-wrap gap-1'>
            {dummyResults.map((item, idx) => (
              <div
                className={`flex h-[21px] w-[21px] items-center justify-center rounded-md border-white p-2 ${item >= 4 ? 'bg-emerald-500' : item === 3 ? 'bg-sky-500' : 'bg-rose-500'}`}
                key={idx}
              ></div>
            ))}
          </div>
        </div>

        <DefaultButton
          handleClick={() => handleReset()}
          customClasses='w-[138px] border-2 border-gray-400 mt-8 p-2'
        >
          <p className=''>Close</p>
        </DefaultButton>
      </section>
    </AnimatedSection>
  )
}

export default CompletedLearnSession
