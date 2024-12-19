import React from 'react'
import { fetchUserInfo } from '@/lib/actions/words/fetchUserInfo'
import { getServerSession } from 'next-auth'
import EndLearnSession from '@/components/buttons/EndLearnSession'
import PageContainer from '@/components/containers/PageContainer'
import InlineError from '@/components/shared/InlineError'
import GoogleSignIn from '@/components/buttons/GoogleSignIn'
import ReviewCont from '@/components/learn/ReviewCont'
import { UserInfoRequest } from '@/types/user.types'

const LearnPage = async () => {
  const serverSession = await getServerSession()

  // If not authSession
  if (!serverSession)
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p className='text-rose-500 mb-4'>You are not logged in.</p>
          <GoogleSignIn />
        </InlineError>
      </PageContainer>
    )

  // Checks active user session in DB + gets key user info (latestWord, wordsDueCount, userStats)
  const userInfo: UserInfoRequest = await fetchUserInfo({
    userEmail: serverSession.user.email
  })

  // If active session in DB:
  if (userInfo.code === 409) {
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p>{userInfo.message}</p>
          <p>Click below to end the session.</p>
          <EndLearnSession userId={userInfo.result.toString()} />
        </InlineError>
      </PageContainer>
    )
  }

  return (
    <PageContainer customClasses='lg:px-12'>
      <ReviewCont
        userStats={userInfo.result.userStats.result}
        preferredChars={userInfo.result.user.preferredChars}
        userId={userInfo.result.user._id.toString()}
        wordsDueCount={userInfo.result.wordsDueCount}
        name={serverSession.user.name.split(' ')[0]}
        latestWord={userInfo.result.user.latestWord}
      />
    </PageContainer>
  )
}

export default LearnPage
