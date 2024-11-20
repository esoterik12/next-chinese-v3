'use client'
import React from 'react'

interface ProgressBarProps {
  goal: number
  progress: number
}

const ProgressBar = ({ goal, progress }: ProgressBarProps) => {
  const percentComplete = Math.floor((progress / goal) * 100)

  // TODO: Animation and better mobile support

  return (
    <div>
      <div
        style={{ width: `${percentComplete}%` }}
        className='h-[2px] bg-sky-500'
      ></div>
      <div
        style={{ width: `${100 - percentComplete}%` }}
        className='h-[2px] bg-gray-900'
      ></div>
    </div>
  )
}

export default ProgressBar
