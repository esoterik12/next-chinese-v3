import TestButton from '@/components/buttons/TestButton'
import React from 'react'
import { getServerSession } from 'next-auth'
import PageContainer from '@/components/containers/PageContainer'

const ServerActionTestPage = async () => {
  const serverSession = await getServerSession()
  console.log('serverSession', serverSession)

  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      <>
        <h1>Page for testing server actions</h1>
        <TestButton />
      </>
    </PageContainer>
  )
}

export default ServerActionTestPage
