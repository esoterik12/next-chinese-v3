import TestButton from '@/components/buttons/TestButton'
import React from 'react'
import { getServerSession } from 'next-auth'
import PageContainer from '@/components/containers/PageContainer'
import IconSettings from '@/components/icons/IconSettings'
import EndLearnSession from '@/components/buttons/EndLearnSession'
import ToggleCharacters from '@/components/buttons/ToggleCharacters'

const ServerActionTestPage = async () => {
  const serverSession = await getServerSession()
  console.log('serverSession', serverSession)

  const buttonStyles =
    'h-6 w-6 text-gray-400 rounded-full mt-1 transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  const dummyWordLearned = {
    _id: '671238b48bcb0d574183518f',
    easeFactor: 2.6,
    interval: 6,
    partOfSpeech: '(N)',
    repetitions: 1,
    seenToday: true,
    sentence: null,
    tocflLevel: 1,
    userId: '670a6a17161d9454a1d19ddf',
    wordId: '670106fac77bd23776833269',
    wordNumber: 383,
    wordPinyin: 'dìtú ',
    wordSimplified: '地图',
    wordTraditional: '地圖',
    wordTranslation: 'map'
  }

  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      <>
        <div className='mr-1 flex h-16 w-full justify-end gap-2'>
          <ToggleCharacters />
          <IconSettings classes={buttonStyles} />
          <EndLearnSession userId='' />
        </div>
        <h1>Page for testing server actions</h1>
        <TestButton />

        <div className='p-7'>
          <div className='mt-6 flex h-[160px] w-[200px] flex-row rounded-xl border-2 border-gray-500 bg-gray-900 p-2 md:flex-col'>
            <div className='flex flex-col gap-y-2 px-4'>
              <p className='custom-small-text'>
                {dummyWordLearned.wordTraditional}
              </p>
              <p className='custom-small-text'>{dummyWordLearned.wordPinyin}</p>
              <p className='custom-small-text'>
                {dummyWordLearned.wordTranslation}
              </p>
              <div className='flex flex-row justify-between'>
                <p className='custom-small-text'>Views:</p>
                <p className='custom-small-text'>
                  {dummyWordLearned.repetitions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </PageContainer>
  )
}

export default ServerActionTestPage
