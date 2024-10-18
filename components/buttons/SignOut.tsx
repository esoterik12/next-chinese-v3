'use client'
import { signOut } from 'next-auth/react'
import DefaultButton from './DefaultButton'

const SignOut = () => {
  return (
    <DefaultButton
      customClasses='w-[80px] md:w-[90px] p-1'
      handleClick={() => signOut()}
    >
      <p className='mt-0.5'>Sign Out</p>
    </DefaultButton>
  )
}

export default SignOut
