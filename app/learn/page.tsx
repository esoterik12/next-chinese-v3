import React from 'react'
import { fetchUserInfo } from '@/lib/actions/words/fetchUserInfo'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import EndLearnSession from '@/components/buttons/EndLearnSession'

const LearnPage = async () => {
  // Gets user email
  const serverSession = await getServerSession()

  // Checks active session in DB for user
  // IF session: returns 409, message, + result: userId (for EndLearnSession)
  // ELSE: returns 200, message, + result: wordsDueCount
  const userInfo = await fetchUserInfo({ userEmail: serverSession.user.email })

  // If session in DB:
  if (userInfo.code === 409) {
    return (
      <main className='flex h-[calc(100vh-64px)] flex-col items-center justify-center'>
        <p>{userInfo.message}</p>
        <EndLearnSession userId={userInfo.result.toString()} />
      </main>
    )
  }

  return (
    <main className='flex h-[calc(100vh-64px)] flex-col items-center justify-center'>
      <p>
        You have <span className='text-rose-600'>{userInfo.result}</span>{' '}
        {userInfo.result === 1 ? 'word' : 'words'} in need of review.
      </p>
      <p>Select how many words you would like to learn today.</p>
      <div className='flex flex-row gap-x-2 p-2'>
        <Link href='/learn/5'>
          <DefaultButton customClasses='w-32 border-2 border-emerald-500 p-2'>
            <p>5</p>
          </DefaultButton>
        </Link>
        <Link href='/learn/20'>
          <DefaultButton customClasses='w-32 border-2 border-sky-500 p-2'>
            <p>20</p>
          </DefaultButton>
        </Link>
        <Link href='/learn/50'>
          <DefaultButton customClasses='w-32 border-2 border-sky-300 p-2'>
            <p>50</p>
          </DefaultButton>{' '}
        </Link>
        <Link href='/learn/80'>
          <DefaultButton customClasses='w-32 border-2 border-rose-400 p-2'>
            <p>80</p>
          </DefaultButton>
        </Link>
        <Link href='/learn/100'>
          <DefaultButton customClasses='w-32 border-2 border-rose-600 p-2'>
            <p>100</p>
          </DefaultButton>
        </Link>
      </div>
    </main>
  )
}

export default LearnPage
