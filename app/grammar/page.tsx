import React from 'react'
import { dummyGrammar } from '@/lib/constants/dummyGrammar'
import PageContainer from '@/components/containers/PageContainer'
import Link from 'next/link'

const GrammarLibraryPage = () => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col items-center rounded-lg p-6 shadow-lg'>
        <h1 className='custom-header-large my-6 text-center text-2xl font-bold tracking-wide'>
          Grammar Library
        </h1>
        <p className='text-gray-400'>Use these grammar concepts in Next Chinese sentence generation to hit two birds with one stone!</p>
        <div className='w-full max-w-3xl space-y-4'>
          {dummyGrammar.map(item => (
            <Link href={`/grammar/${item.sectionLink}`} key={item.conceptNumber} className='flex-1 p-2'>
              <div
                
                className='flex items-center justify-between rounded-md border border-gray-200 p-2 transition-shadow hover:border-sky-500 duration-300 hover:shadow-md custom-hover-effect'
              >
                <p className='text-lg font-medium'>
                  Chapter {item.conceptNumber}{' '}
                  <span className='text-gray-400'>-</span> {item.sectionTitle}
                </p>
              </div>{' '}
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

export default GrammarLibraryPage
