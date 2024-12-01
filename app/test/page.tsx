import React from 'react'
import PageContainer from '@/components/containers/PageContainer'
import TestButton from '@/components/buttons/TestButton'
import { getServerSession } from 'next-auth'
import { fetchUserInfo } from '@/lib/actions/words/fetchUserInfo'
import InlineError from '@/components/shared/InlineError'
import GoogleSignIn from '@/components/buttons/GoogleSignIn'
import { UserInfoRequest } from '@/types/user.types'

const ServerActionTestPage = async () => {
  const serverSession = await getServerSession()

  // If not authSession
  if (!serverSession)
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p className='text-rose-500'>You are not logged in.</p>
          <GoogleSignIn />
        </InlineError>
      </PageContainer>
    )

  // Checks active user session in DB + gets key user info (latestWord, wordsDueCount, userStats)
  const userInfo: UserInfoRequest = await fetchUserInfo({
    userEmail: serverSession.user.email
  })

  return (
    <PageContainer>
      {/* <TestDesignComp /> */}
      <TestButton userId={userInfo.result.user._id.toString()}></TestButton>
    </PageContainer>
  )
}

export default ServerActionTestPage
