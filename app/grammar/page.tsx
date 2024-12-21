import React from 'react'
import { grammarPageLinks } from '@/lib/constants/grammarPageLinks'
import Link from 'next/link'
import IconPuzzle from '@/components/icons/IconPuzzle'

const GrammarLibraryPage = () => {
  return (
    <section className='flex flex-col rounded-lg shadow-lg'>
      <h1 className='custom-header font-bold tracking-wide'>Grammar Library</h1>
      <p className='mt-2 text-zinc-400'>
        You can add these concepts to your learning session to generate
        sentences using the concepts you are learning.
      </p>
      <p className='mt-2 inline-flex text-zinc-400'>
        <IconPuzzle classes='h-6 w-6 text-sky-500 mr-2' />
        Look for this icon to select a grammar concept.
      </p>
      <div className='w-full'>
        {grammarPageLinks.map(item => (
          <Link
            href={`/grammar/${item.sectionLink}`}
            key={item.conceptNumber}
            className='flex-1 p-2'
          >
            <div className='custom-hover-effect flex items-center justify-between rounded-md border border-zinc-400 p-2 transition-shadow duration-300 hover:border-sky-500 hover:shadow-md'>
              <p className='font-medium'>
                Chapter {item.conceptNumber}{' '}
                <span className='text-zinc-400'>-</span> {item.sectionTitle}
              </p>
            </div>{' '}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GrammarLibraryPage
