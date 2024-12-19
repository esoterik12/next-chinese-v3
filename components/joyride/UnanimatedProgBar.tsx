'use client'
import React from 'react'

interface ProgressBarProps {
  goal: number
  progress: number
}

const UnanimatedProgressBar = ({ goal, progress }: ProgressBarProps) => {
  const percentComplete = Math.floor((progress / goal) * 100)

  return (
    <div className='flex w-full flex-row'>
      <div
        style={{
          width: `${percentComplete}%`,
          transition: 'width 0.5s ease-in-out'
        }}
        className='rounded-full h-[2px] bg-sky-500'
      />
      <div
        style={{
          width: `${100 - percentComplete}%`,
          transition: 'width 0.5s ease-in-out'
        }}
        className='h-[2px] custom-background'
      />
    </div>
  )
}

export default UnanimatedProgressBar
