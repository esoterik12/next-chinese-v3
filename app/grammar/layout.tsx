import React from 'react'
import PageContainer from '@/components/containers/PageContainer'

const GrammarLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <>{children}</>
    </PageContainer>
  )
}

export default GrammarLayout
