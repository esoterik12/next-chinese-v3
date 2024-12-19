'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  goal: number
  progress: number
}

const ProgressBar = ({ goal, progress }: ProgressBarProps) => {
  const percentComplete = Math.floor((progress / goal) * 100)

  return (
    <motion.div className='flex w-full flex-row'>
      <motion.div
        animate={{ width: `${percentComplete}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='h-[2px] bg-sky-500'
      />
      <motion.div
        animate={{ width: `${100 - percentComplete}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='h-[2px] custom-background'
      />
    </motion.div>
  )
}

export default ProgressBar
