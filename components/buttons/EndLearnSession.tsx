'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { endLearnSession } from '@/lib/actions/session/endLearnSession'

const EndLearnSession = ({ userId }: { userId: string }) => {
  const router = useRouter()

  const onClickEnd = async () => {
    await endLearnSession(userId)
    router.push('/')
  }

  return (
    <p
      className='p-2 custom-tertiary-link'
      onClick={onClickEnd}
    >
      Close Session
    </p>
  )
}

export default EndLearnSession
