'use client'
import HomePageButton from '@/components/buttons/HomePageButton'
import HomepageCard from '@/components/cards/HomepageCard'
import PageContainer from '@/components/containers/PageContainer'

export default function Home() {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <>
        <div className='flex flex-col md:flex-row p-4 rounded-lg'>
          <section className='flex w-full flex-col items-center text-center'>
            <h1 className='custom-header-large mt-6 md:mt-14'>
              Start Your Journey to{' '}
              <span className='text-sky-500'>Fluency</span>
            </h1>
            <p className='mt-4 text-2xl font-light text-gray-400'>
              8,000 Words prepared in traditional and simplifiedfor everyday
              language learners
            </p>
            <HomePageButton />
          </section>
        </div>
        <div className='p-4 flex w-full flex-col items-center justify-center gap-x-8 lg:flex-row'>
          <HomepageCard
            image='/images/chinese-meng.png'
            subtitle='Spaced Repetition:'
            text='Proven strategy for learning thousands of new words.'
          />
          <HomepageCard
            image='/images/chinese-fu.png'
            subtitle='Anti-Lock-In Structure:'
            text='Subscription cut to 50% after 12 months, and again to 75% after 24!'
          />
          <HomepageCard
            image='/images/chinese-love.png'
            subtitle='Free for 500 Words:'
            text='Pay nothing until you have finished Level 1.'
          />
        </div>
      </>
    </PageContainer>
  )
}
