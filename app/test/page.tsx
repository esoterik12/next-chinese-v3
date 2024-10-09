import TestButton from '@/components/buttons/TestButton'
import React from 'react'
import { getServerSession } from 'next-auth'

const ServerActionTestPage = async () => {
  const serverSession = await getServerSession()
  console.log('serverSession', serverSession)

  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <h1>Page for testing server actions</h1>
      <TestButton />
    </div>
  )
}

export default ServerActionTestPage
