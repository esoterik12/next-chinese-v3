'use client'
import React, { SetStateAction } from 'react'
import DefaultButton from '@/components/buttons/DefaultButton'
import IconLevel from '@/components/icons/IconLevel'
import IconRocket from '@/components/icons/IconRocket'
import IconViews from '@/components/icons/IconViews'
import StatsContainer from '@/components/containers/StatsContainer'
import AnimatedSection from '../cards/AnimatedSection'
import { fetchWords } from '@/lib/actions/words/fetchWords'
import { ReviewResultDocument } from '@/types/review.types'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import InlineError from '../shared/InlineError'
import calcLevel from '@/lib/utils/calcLevel'
import { BasicUserStatsData } from '@/types/user.types'
import { formatLastSession } from '@/lib/utils/formatLastSession'
import Link from 'next/link'

const learningOptionsObject = [
  { value: 2, border: 'border-gray-500', textColor: 'text-gray-300' },
  { value: 20, border: 'border-gray-500', textColor: 'text-gray-300' },
  { value: 40, border: 'border-gray-500', textColor: 'text-gray-300' },
  // { value: 60, border: 'border-gray-500', textColor: 'text-gray-300' },
  { value: 80, border: 'border-gray-500', textColor: 'text-gray-300' },
  { value: 100, border: 'border-gray-500', textColor: 'text-gray-300' }
]

interface PrepLearnSessionProps {
  userId: string // converted from ObjectId in page.tsx
  goal: number
  setGoal: React.Dispatch<SetStateAction<number>>
  name: string
  wordsDueCount: number
  latestWord: number
  userStats: BasicUserStatsData[]
  preferredChars: 'traditional' | 'simplified'
}

const PrepLearnSession = ({
  userId,
  goal,
  setGoal,
  name,
  wordsDueCount,
  latestWord,
  userStats,
  preferredChars
}: PrepLearnSessionProps) => {
  const { dispatch, error } = useReviewContext()

  const handleStart = async () => {
    try {
      // This function gets words AND uses user id to start a review session in the DB
      const learnSessionData = await fetchWords({
        userId: userId,
        sessionWordGoal: goal
      })

      // Map through fetched words to add seenToday and newSentencesArray properties
      if (learnSessionData.result) {
        const fetchedWordsSeenToday = learnSessionData.result.words.map(
          (word: ReviewResultDocument) => ({
            ...word,
            seenToday: false,
            newSentencesArray: []
          })
        )

        // Add words and latestWord to app context
        dispatch({
          type: 'loadWords',
          fetchedWords: fetchedWordsSeenToday,
          characterState: preferredChars
        })
      }
    } catch (error) {
      dispatch({ type: 'setError', error: 'Error loading session.' })
    }
  }

  const handleRetry = () => {
    dispatch({ type: 'resetState' })
  }

  return (
    <AnimatedSection
      entryTransition={0.55}
      entryDelay={0.25}
      initialY={-20}
      easeType={[0.22, 0, 0.42, 1]}
      exitY={20}
      classes='h-full flex flex-col'
    >
      <div>
        {/* Top section */}
        <div className='border-b border-gray-700'>
          {/* Conditional formating depending on userStats & latestWord */}
          <h1 className='md:custom-header custom-subheader'>
            Welcome{latestWord > 0 ? ' back' : ''}, {name}
          </h1>

          {userStats && latestWord > 0 && (
            <p className='mb-6 text-gray-400'>
              Your last session was {formatLastSession(userStats[0].date)}.
            </p>
          )}

          {!userStats && latestWord === 0 && (
            <p className='py-4'>
              Begin your first learning session by choosing how many words you
              would like to learn today.
            </p>
          )}

          {/* Top level primary stats boxes */}
          <div className='mt-2 flex flex-row flex-wrap gap-4 md:gap-8'>
            <StatsContainer
              icon={<IconLevel classes='w-6 h-6 text-sky-500' />}
              titleText='Current level:'
              valueText={calcLevel(latestWord)}
            />
            <StatsContainer
              icon={<IconRocket classes='w-6 h-6 text-emerald-500' />}
              titleText='Awaiting review:'
              valueText={wordsDueCount}
            />
            <StatsContainer
              icon={<IconViews classes='w-6 h-6 text-rose-500' />}
              titleText='Words learned:'
              valueText={latestWord}
            />
          </div>

          {/* Last 30 days section */}
          <div className='mb-8 mt-4'>
            <p className='py-2'>Last 30 days:</p>
            <div className='flex flex-row flex-wrap gap-1'>
              {userStats.map((item, idx) => (
                <div
                  className={`flex h-[16px] w-[16px] items-center justify-center rounded-sm border-white p-2 md:h-[20px] md:w-[20px] md:rounded-md ${item.viewCount >= 50 ? 'bg-emerald-500' : item.viewCount > 0 ? 'bg-sky-500' : 'bg-gray-500'}`}
                  key={idx}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Select learning goals section */}
        <div className=''>
          <p className='custom-subheader mb-4 mt-6'>Select your target:</p>
          <div className='flex flex-row flex-wrap gap-2 py-2'>
            {learningOptionsObject.map(item => (
              <DefaultButton
                key={item.value}
                customClasses={`md:w-[138px] w-[60px] bg-gray-900 p-2 ${goal === item.value ? 'border-2 border-gray-400 bg-gray-900 font-semibold' : item.border}`}
                handleClick={() => setGoal(item.value)}
              >
                <p
                  className={` ${goal === item.value ? 'text-gray-100' : item.textColor}`}
                >
                  {item.value}
                </p>
              </DefaultButton>
            ))}
          </div>

          {/* Start Button and Error Display: */}
          <div className='mt-6 flex flex-row gap-2'>
            {!error ? (
              <DefaultButton
                handleClick={() => handleStart()}
                customClasses='md:w-[138px] w-[128px] border-2 border-emerald-500 p-2'
              >
                <p className='font-semibold'>Start</p>
              </DefaultButton>
            ) : (
              <DefaultButton
                handleClick={() => handleRetry()}
                customClasses='md:w-[138px] w-[128px] border-2 border-sky-500 p-2'
              >
                <p className='font-semibold'>Retry</p>
              </DefaultButton>
            )}
            <Link href='/settings'>
              <DefaultButton
                customClasses='md:w-[138px] w-[128px] h-[44px] bg-gray-900 p-2'
              >
                <p className='font-semibold'>Settings</p>
              </DefaultButton>
            </Link>
            {error && (
              <div className=''>
                <InlineError
                  initialX={-10}
                  initialY={0}
                  classes='p-2 text-rose-500'
                >
                  {error}
                </InlineError>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default PrepLearnSession
