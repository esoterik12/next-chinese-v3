'use client'
import DefaultButton from '../buttons/DefaultButton'
import { AnimatePresence } from 'framer-motion'
import ResultButton from './ResultButton'
import IconDownChevron from '../icons/IconDownChevron'
import AnimatedSection from './AnimatedSection'
import { dummyWordData } from '@/lib/dummyData'

type WordCardProps = {
  show: boolean
  handleClick: () => void
}

const WordCard = ({ show, handleClick }: WordCardProps) => {
  return (
    <div className='custom-gradient-background custom-border h-[340px] w-[250px]'>
      <div className='flex h-[110px] flex-col items-center justify-end gap-y-4'>
        <p className='custom-header'>
          {dummyWordData[3].traditional}
        </p>
        <p>
          {dummyWordData[3].simplified}
        </p>
      </div>

      <div className='flex h-[230px] flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
          {!show && (
            <AnimatedSection motionKey='button'>
              <DefaultButton
                handleClick={handleClick}
                customClasses='mb-14 p-2'
              >
                <IconDownChevron classes='h-6 w-6' />
              </DefaultButton>
            </AnimatedSection>
          )}

          {show && (
            <AnimatedSection
              classes='h-full flex-col items-stretch mt-10 justify-between'
              motionKey='answer'
            >
              <>
                <h1 className='font-bold text-sky-400'>
                  {dummyWordData[3].partOfSpeech}
                </h1>
                <div>
                  <p>{show && dummyWordData[3].pinyin}</p>
                  <p className='custom-gray-text'>
                    {show && dummyWordData[3].translation}
                  </p>
                </div>
                <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-0.5'>
                  <ResultButton text='1' textColor='text-rose-600' />
                  <ResultButton text='2' textColor='text-rose-400' />
                  <ResultButton text='3' textColor='text-sky-300' />
                  <ResultButton text='4' textColor='text-sky-400' />
                  <ResultButton text='5' textColor='text-sky-500' />
                </div>
              </>
            </AnimatedSection>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WordCard
