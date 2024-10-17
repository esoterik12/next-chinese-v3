import TestButton from '@/components/buttons/TestButton'
import React from 'react'
import { getServerSession } from 'next-auth'
import PageContainer from '@/components/containers/PageContainer'
import IconSettings from '@/components/icons/IconSettings'
import EndLearnSession from '@/components/buttons/EndLearnSession'
import ToggleCharacters from '@/components/buttons/ToggleCharacters'

const buttonStyles =
  'h-6 w-6 text-gray-400 rounded-full mt-1 transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

const ServerActionTestPage = async () => {
  const serverSession = await getServerSession()
  console.log('serverSession', serverSession)

  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      <>
        <div className='mr-1 flex h-16 w-full justify-end gap-2'>
          <ToggleCharacters />
          <IconSettings classes={buttonStyles} />
          <EndLearnSession userId='' />
        </div>
        <h1>Page for testing server actions</h1>
        <TestButton />
      </>
    </PageContainer>
  )
}

export default ServerActionTestPage
