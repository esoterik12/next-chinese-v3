'use client'
import HomePageButton from '@/components/buttons/HomePageButton'
import HomepageCard from '@/components/cards/HomepageCard'
import PageContainer from '@/components/containers/PageContainer'

export default function Home() {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <>
        <div className='flex flex-col rounded-lg p-4 md:flex-row'>
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
        <div className='flex w-full flex-col items-center justify-center gap-x-8 p-4 lg:flex-row'>
          <HomepageCard
            image='/images/chinese-meng.png'
            subtitle='Spaced Repetition:'
            text='Master thousands of new words with a proven method for long-term retention.'
          />
          <HomepageCard
            image='/images/chinese-fu.png'
            subtitle='Context Sentence Generation:'
            text='Learn in context by generating meaningful sentences with built-in grammar integration.'
          />
          <HomepageCard
            image='/images/chinese-love.png'
            subtitle='Grammar Library:'
            text='Boost your progress with an extensive library of essential grammar concepts.'
          />
        </div>
      </>
    </PageContainer>
  )
}
