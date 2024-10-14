'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const FaqPage = () => {
  const { data: session } = useSession()
  console.log('session', session)
  return <div>FaqPage</div>
}

export default FaqPage
