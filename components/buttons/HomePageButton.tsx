'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import DefaultButton from './DefaultButton'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import IconRightChevron from '../icons/IconRightChevron'

const HomePageButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {session && (
        <DefaultButton customClasses='w-44 mt-10 border-2 border-emerald-500 p-2'>
          <Link href='/learn'>
            <p>Continue Learning</p>
          </Link>
        </DefaultButton>
      )}
      {!session && (
        <DefaultButton
          customClasses='w-44 mt-10 border-2 border-emerald-500 p-2 flex flex-row items-center justify-center gap-x-2'
          handleClick={() => signIn('google')}
        >
          <>
            <p>Sign Up Now</p>
            <IconRightChevron classes='h-4 w-4' />
          </>
        </DefaultButton>
      )}
    </>
  )
}

export default HomePageButton
