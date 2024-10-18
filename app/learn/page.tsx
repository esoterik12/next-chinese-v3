import React from 'react'
import { fetchUserInfo } from '@/lib/actions/words/fetchUserInfo'
import { getServerSession } from 'next-auth'
import EndLearnSession from '@/components/buttons/EndLearnSession'
import PageContainer from '@/components/containers/PageContainer'
import InlineError from '@/components/shared/InlineError'
import GoogleSignIn from '@/components/buttons/GoogleSignIn'
import ReviewCont from '@/components/learn/ReviewCont'

const LearnPage = async () => {
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

  // Checks active user session in DB
  // IF session: returns 409, message, + result: userId (for EndLearnSession)
  // ELSE: returns 200, message, + result: wordsDueCount
  const userInfo = await fetchUserInfo({ userEmail: serverSession.user.email })

  // If active session in DB:
  if (userInfo.code === 409) {
    return (
      <PageContainer>
        <InlineError classes='p-2 h-full w-full flex flex-grow flex-col items-center justify-center'>
          <p>{userInfo.message}</p>
          <EndLearnSession userId={userInfo.result.toString()} />
        </InlineError>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <ReviewCont
        userId={userInfo.result.user._id.toString()}
        wordsDueCount={userInfo.result.wordsDueCount}
        name={serverSession.user.name.split(' ')[0]}
        latestWord={userInfo.result.user.latestWord}
      />
    </PageContainer>
  )
}

export default LearnPage
