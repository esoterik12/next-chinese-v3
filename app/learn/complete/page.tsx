import React from 'react'
import SessionEndContainer from '@/components/containers/SessionEndContainer'
import PageContainer from '@/components/containers/PageContainer'

const CompletePage = () => {
  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      <SessionEndContainer />
    </PageContainer>
  )
}

export default CompletePage
