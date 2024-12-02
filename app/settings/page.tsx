import React from 'react'
import PageContainer from '@/components/containers/PageContainer'
import Tabs from '@/components/settings/Tabs'
import { getServerSession } from 'next-auth'
import InlineError from '@/components/shared/InlineError'
import GoogleSignIn from '@/components/buttons/GoogleSignIn'
import { UserInfoRequest } from '@/types/user.types'
import { fetchUserInfo } from '@/lib/actions/words/fetchUserInfo'

const SettingsPage = async () => {
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
    <PageContainer customClasses='p-4 lg:px-24'>
      <>
        <h2 className='custom-header'>Account Settings</h2>
        <Tabs
          userId={userInfo.result.user._id.toString()}
          userEmail={serverSession.user.email}
          userName={serverSession.user.name}
          userSince={userInfo.result.user.createdAt}
        />
      </>
    </PageContainer>
  )
}

export default SettingsPage
