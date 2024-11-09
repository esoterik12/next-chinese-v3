import React from 'react'
import { dummyGrammar } from '@/lib/constants/dummyGrammar'
import PageContainer from '@/components/containers/PageContainer'
import Link from 'next/link'

const GrammarLibraryPage = () => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col'>
        <h1 className='custom-header-large my-4 text-blue-500 md:my-8'>
          Grammar Library
        </h1>
        {dummyGrammar.map(item => (
          <div key={item.conceptNumber}>
            <Link href={`/grammar/${item.sectionLink}`}>
              <h2>{item.sectionTitle}</h2>
            </Link>
          </div>
        ))}
      </section>
    </PageContainer>
  )
}

export default GrammarLibraryPage
