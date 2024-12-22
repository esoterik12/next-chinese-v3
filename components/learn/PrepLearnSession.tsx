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
import Link from 'next/link'
import OpenGrammarModal from '../grammar/OpenGrammarModal'

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
      classes='h-full flex flex-col px-4 md:px-12 sm:px-4 py-4 rounded-lg'
    >
      <div>
        {/* Top section */}
        <div>
          {/* Conditional formating depending on userStats & latestWord */}
          <h1 className='md:custom-header custom-subheader'>
            Welcome{latestWord > 0 ? ' back' : ''}, {name}
          </h1>

          {!userStats && latestWord === 0 && (
            <p className='py-4'>
              Begin your first learning session by choosing how many words you
              would like to learn today.
            </p>
          )}

          {/* Top level primary stats boxes */}
          <div className='custom-background mt-2 flex max-w-[335px] flex-col items-stretch justify-between rounded-lg p-2 md:max-w-[725px]'>
            <div className='flex flex-row flex-wrap gap-4 md:ml-6 md:gap-12'>
              <StatsContainer
                icon={<IconLevel classes='w-6 h-6 text-sky-500' />}
                titleText='Current level:'
                // +1 is added so the current level displayed is what the user's next word will be, not current
                valueText={calcLevel(latestWord + 1)}
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
            <div className='mt-6 md:mt-0'>
              <p className='pb-1 pt-2 text-zinc-400'>Last 30 days:</p>
              <div className='grid w-[320px] grid-cols-15 gap-1 md:flex md:w-full md:flex-row'>
                {userStats.map((item, idx) => (
                  <div
                    className={`flex h-[17px] w-[17px] items-center justify-center rounded-sm border-white p-2 md:h-[20px] md:w-[20px] ${item.viewCount >= 50 ? 'bg-emerald-500' : item.viewCount > 0 ? 'bg-sky-500' : 'bg-zinc-700'}`}
                    key={idx}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Select learning goals section */}
        <div className='ml-1 mt-6'>
          <p className='mb-1 text-zinc-400'>Select your words target:</p>
          <div className='flex flex-row flex-wrap gap-2'>
            {[20, 40, 60, 80, 100].map(item => (
              <DefaultButton
                key={item}
                customClasses={`md:w-[138px] border w-[60px] p-2 ${goal === item ? 'border-zinc-400 custom-light-background font-semibold' : 'border-zinc-800'}`}
                handleClick={() => setGoal(item)}
              >
                <p className={` ${goal === item ? 'text-gray-100' : item}`}>
                  {item}
                </p>
              </DefaultButton>
            ))}
          </div>

          {/* Start Button and Error Display: */}
          <div className='mt-8 flex flex-row gap-2'>
            {!error ? (
              <DefaultButton
                handleClick={() => handleStart()}
                customClasses='md:w-[138px] w-[128px] border border-emerald-500 p-2'
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
              <DefaultButton customClasses='md:w-[138px] w-[128px] h-[44px] custom-border p-2'>
                <p className='font-semibold'>Settings</p>
              </DefaultButton>
            </Link>
            <OpenGrammarModal modalVersion='prepLearnSession' />
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
