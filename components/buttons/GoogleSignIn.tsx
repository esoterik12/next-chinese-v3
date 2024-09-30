'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

const GoogleSignIn = () => {
  return <button onClick={() => signIn('google')}>Sign In</button>
}

export default GoogleSignIn
