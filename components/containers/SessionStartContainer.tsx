import React from 'react'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import IconLevel from '@/components/icons/IconLevel'
import IconRocket from '@/components/icons/IconRocket'
import IconViews from '@/components/icons/IconViews'
import StatsContainer from '@/components/containers/StatsContainer'

const dummyLast30 = [
  0, 0, 0, 0, 40, 50, 80, 100, 0, 50, 50, 20, 0, 0, 55, 66, 0, 0, 40, 100, 80,
  20, 50, 80, 100, 0, 0, 100, 55
]

const learningOptionsObject = [
  { value: 5, border: 'border-gray-500', textColor: 'text-sky-200' },
  { value: 20, border: 'border-gray-500', textColor: 'text-sky-300' },
  { value: 50, border: 'border-gray-500', textColor: 'text-sky-400' },
  { value: 80, border: 'border-gray-500', textColor: 'text-sky-500' },
  { value: 100, border: 'border-gray-500', textColor: 'text-sky-600' }
]

interface SessionStartContProps {
  name: string
  wordsDueCount: number
}

const SessionStartContainer = ({name, wordsDueCount}: SessionStartContProps) => {
  return (
    <section className='p-6'>
      <h1 className='md:custom-header custom-subheader'>
        Welcome back, {name}
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
          <Link key={item.value} href={`/learn/${item.value}`}>
            <DefaultButton
              customClasses={`w-[138px] border-2 ${item.border} p-2`}
            >
              <p className={`font-semibold ${item.textColor}`}>{item.value}</p>
            </DefaultButton>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SessionStartContainer
