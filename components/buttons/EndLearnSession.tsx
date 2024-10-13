'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'
import IconPower from '../icons/IconPower'

const EndLearnSession = ({ userId }: { userId: string }) => {
  const router = useRouter()

  const onClickEnd = async () => {
    await endLearnSession({ userId })
    router.push('/')
  }

  return (
    <p className='custom-tertiary-link' onClick={onClickEnd}>
      <IconPower classes='w-6 h-6' />
    </p>
  )
}

export default EndLearnSession
