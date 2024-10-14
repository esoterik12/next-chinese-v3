'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import PageContainer from '@/components/containers/PageContainer'

const FaqPage = () => {
  const { data: session } = useSession()
  console.log('session', session)
  
  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      <p>FaqPage</p>
    </PageContainer>
  )
}

export default FaqPage
