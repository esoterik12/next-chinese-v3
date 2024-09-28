'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

const GoogleSignIn = () => {
  return <button onClick={() => signIn('google')}>Login</button>
}

export default GoogleSignIn
