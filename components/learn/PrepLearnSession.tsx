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
import { useAppContext } from '@/lib/context/ReviewSessionContext'

const dummyLast30 = [
  0, 0, 0, 0, 40, 50, 80, 100, 0, 50, 50, 20, 0, 0, 55, 66, 0, 0, 40, 100, 80,
  20, 50, 80, 100, 0, 0, 100, 55
]

const learningOptionsObject = [
  { value: 1, border: 'border-gray-500', textColor: 'text-gray-400' },
  { value: 20, border: 'border-gray-500', textColor: 'text-gray-400' },
  { value: 50, border: 'border-gray-500', textColor: 'text-gray-400' },
  { value: 80, border: 'border-gray-500', textColor: 'text-gray-400' },
  { value: 100, border: 'border-gray-500', textColor: 'text-gray-400' }
]

interface PrepLearnSessionProps {
  userId: string // converted from ObjectId in page.tsx
  goal: number
  setGoal: React.Dispatch<SetStateAction<number>>
  name: string
  wordsDueCount: number
  latestWord: number
}

const PrepLearnSession = ({
  userId,
  goal,
  setGoal,
  name,
  wordsDueCount,
  latestWord
}: PrepLearnSessionProps) => {
  const { dispatch, error } = useAppContext()

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
          userLatestWord: learnSessionData.result.userLatestWord
        })
      }
    } catch (error) {
      // setError('Error loading the learning session.')
      console.log('error in handleStart in PrepLearnSession.tsx', error)
    }
  }

  return (
    <AnimatedSection
      entryTransition={0.55}
      entryDelay={0.25}
      initialY={-20}
      easeType={[0.22, 0, 0.42, 1]}
      exitY={20}
    >
      <section className='p-6'>
        <h1 className='md:custom-header custom-subheader'>
          Welcome{latestWord > 0 ? ' back' : ''}, {name}
        </h1>
        <p className='py-2'>Your last learning session was 5 days ago.</p>
        {/* Top level primary stats boxes */}
        <div className='flex flex-row flex-wrap gap-4 md:gap-8'>
          <StatsContainer
            icon={<IconLevel classes='w-6 h-6 text-sky-500' />}
            titleText='Current level:'
            valueText='3'
          />
          <StatsContainer
            icon={<IconRocket classes='w-6 h-6 text-emerald-500' />}
            titleText='Awaiting review:'
            valueText={wordsDueCount}
          />
          <StatsContainer
            icon={<IconViews classes='w-6 h-6 text-rose-500' />}
            titleText='Words learned:'
            valueText='782'
          />
        </div>

        {/* Last 30 days section */}
        <div className='mt-6'>
          <p className='py-2'>Last 30 days:</p>
          <div className='flex flex-row flex-wrap gap-1'>
            {dummyLast30.map((item, idx) => (
              <div
                className={`flex h-[21px] w-[21px] items-center justify-center rounded-md border-white p-2 ${item >= 50 ? 'bg-emerald-500' : item > 0 ? 'bg-sky-500' : 'bg-gray-500'}`}
                key={idx}
              ></div>
            ))}
          </div>
        </div>

        {/* Select learning goals section */}
        <p className='mt-8'>
          Select how many words you would like to study today:
        </p>
        <div className='flex flex-row flex-wrap gap-2 py-2'>
          {learningOptionsObject.map(item => (
            <DefaultButton
              key={item.value}
              customClasses={`w-[138px] border-2  p-2 ${goal === item.value ? 'border-gray-400 bg-gray-900 font-semibold' : item.border}`}
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
        <DefaultButton
          handleClick={() => handleStart()}
          customClasses='w-[138px] border-2 border-emerald-500 mt-8 p-2'
        >
          <p className=''>Start</p>
        </DefaultButton>
      </section>
    </AnimatedSection>
  )
}

export default PrepLearnSession
