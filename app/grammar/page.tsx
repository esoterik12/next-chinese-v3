import React from 'react'
import { grammarPageLinks } from '@/lib/constants/grammarPageLinks'
import Link from 'next/link'

const GrammarLibraryPage = () => {
  return (
    <section className='flex flex-col rounded-lg shadow-lg'>
      <h1 className='custom-header font-bold tracking-wide'>Grammar Library</h1>
      <p className='text-gray-400'>
        Use these grammar concepts in Next Chinese sentence generation to hit
        two birds with one stone!
      </p>
      <div className='w-full'>
        {grammarPageLinks.map(item => (
          <Link
            href={`/grammar/${item.sectionLink}`}
            key={item.conceptNumber}
            className='flex-1 p-2'
          >
            <div className='custom-hover-effect flex items-center justify-between rounded-md border border-gray-400 p-2 transition-shadow duration-300 hover:border-sky-500 hover:shadow-md'>
              <p className='font-medium'>
                Chapter {item.conceptNumber}{' '}
                <span className='text-gray-400'>-</span> {item.sectionTitle}
              </p>
            </div>{' '}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GrammarLibraryPage
