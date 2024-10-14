'use client'
import React from 'react'
import IconViews from '@/components/icons/IconViews'
import StatsContainer from '@/components/containers/StatsContainer'
import IconStars from '../icons/IconStars'
import IconTime from '../icons/IconTime'

interface SessionEndContainerProps {}

const dummyResults = Array.from({ length: 50 }, (_, i) =>
  Math.ceil(Math.random() * 5)
)

const SessionEndContainer = (props: SessionEndContainerProps) => {
  return (
    <section className='p-6'>
      <h1 className='md:custom-header custom-subheader py-2'>Session complete.</h1>
      {/* Main stats boxes */}
      <div className='flex flex-row flex-wrap gap-4 md:gap-8'>
        <StatsContainer
          icon={<IconViews classes='w-6 h-6 text-sky-500' />}
          titleText='Words seen:'
          valueText='50'
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

      {/* Select learning goals section */}
      <p className='mt-8'>
        Select how many words you would like to study today:
      </p>
      {/* <div className='flex flex-row flex-wrap gap-2 py-2'>
        {learningOptionsObject.map(item => (
          <Link key={item.value} href={`/learn/${item.value}`}>
            <DefaultButton
              customClasses={`w-[138px] border-2 ${item.border} p-2`}
            >
              <p className={`font-semibold ${item.textColor}`}>{item.value}</p>
            </DefaultButton>
          </Link>
        ))}
      </div> */}
    </section>
  )
}

export default SessionEndContainer
