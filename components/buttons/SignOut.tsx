'use client'
import { signOut } from 'next-auth/react'
import DefaultButton from './DefaultButton'

const SignOut = () => {
  return (
    <DefaultButton
      customClasses='w-[80px] md:w-[90px] border-2 border-gray-500 p-1'
      handleClick={() => signOut()}
    >
      <p>Sign Out</p>
    </DefaultButton>
  )
}

export default SignOut
