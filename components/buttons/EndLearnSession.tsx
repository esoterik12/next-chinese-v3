'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import IconPower from '../icons/IconPower'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'

interface EndLearnSessionProps {
  userId: string
  latestWord?: number
  id?: string
}

const EndLearnSession = ({ userId, latestWord, id }: EndLearnSessionProps) => {
  const { dispatch, finishedWords, characterState, startTime } =
    useReviewContext()
  const router = useRouter()

  const onClickEnd = async () => {
    try {
      await endLearnSession({
        userId,
        finishedWords,
        characterState,
        latestWord,
        startTime
      })
    } catch (error) {
      dispatch({type: 'setError', error: 'Error ending session. Save may have been unsuccessful.'})
    } finally {
      dispatch({ type: 'resetState' })
      router.push('/')
    }
  }

  return (
    <p className=''>
      <IconPower
        id={id}
        onClick={onClickEnd}
        classes='w-6 h-6 text-gray-400 custom-tertiary-link mt-1 transition-colors duration-300 hover:cursor-pointer hover:text-gray-300'
      />
    </p>
  )
}

export default EndLearnSession
