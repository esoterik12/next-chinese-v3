'use client'
import PageContainer from '@/components/containers/PageContainer'

export default function Home() {
  return (
    <PageContainer customClasses='p-4 lg:p-12'>
      <div className='flex flex-col md:flex-row'>
        <section className='w-full md:w-3/5'>
          <h1 className='custom-header-large my-20'>
            Start Your Journey to <span className='text-blue-500'>Fluency</span>
          </h1>
          <p className='custom-header'>
            <span className='underline'>8,000 Words</span> prepared in
            <span className='bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent underline'>
              {' '}
              traditional{' '}
            </span>
            and{' '}
            <span className='bg-gradient-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent'>
              simplified
            </span>{' '}
            for everyday language learners
          </p>
        </section>
        <section className='w-full flex flex-col items-center p-20 md:w-2/5'>
          <p>Demo Here</p>
        </section>
        {/* Ideas for this page:
            -Counting up number for stats: words, users, sentences, etc, views
        */}
      </div>
    </PageContainer>
  )
}
