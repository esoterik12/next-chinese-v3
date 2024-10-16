'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import IconPower from '../icons/IconPower'
import { useAppContext } from '@/lib/context/ReviewSessionContext'

const EndLearnSession = ({ userId }: { userId: string }) => {
  const {dispatch } = useAppContext()
  const router = useRouter()

  const onClickEnd = async () => {
    await endLearnSession({ userId })
    dispatch({type: 'resetState'})
    router.push('/')
  }

  return (
    <p
      className='custom-tertiary-link h-6 w-6 rounded-full text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-gray-300'
      onClick={onClickEnd}
    >
      <IconPower classes='w-6 h-6' />
    </p>
  )
}

export default EndLearnSession
