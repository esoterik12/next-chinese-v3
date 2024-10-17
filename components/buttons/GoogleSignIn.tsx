'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import DefaultButton from './DefaultButton'

const GoogleSignIn = () => {
  return (
    <DefaultButton
      customClasses='w-[90px] border-2 border-gray-500 p-1'
      handleClick={() => signIn('google')}
    >
      <p>Sign In</p>
    </DefaultButton>
  )
}

export default GoogleSignIn
