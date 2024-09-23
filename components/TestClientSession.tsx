'use client'

import { useSession } from 'next-auth/react'
import SignOut from './buttons/SignOut'

export default function TestClientSession() {
  const { data: session, status } = useSession()
  console.log('session', session)
  return (
    <div>
      <h2>Client Component: {status}</h2>
      <p>{status === 'authenticated' && session.user?.name}</p>
      <p>{status === 'authenticated' && <SignOut />}</p>
    </div>
  )
}
