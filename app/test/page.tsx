import TestButton from '@/components/buttons/TestButton'
import React from 'react'
import { getServerSession } from 'next-auth'
import PageContainer from '@/components/containers/PageContainer'
import IconSettings from '@/components/icons/IconSettings'
import EndLearnSession from '@/components/buttons/EndLearnSession'
import ToggleCharacters from '@/components/buttons/ToggleCharacters'
import IconLevel from '@/components/icons/IconLevel'
import { formatTimeSince } from '@/lib/utils/formatTimeSince'
import IconStars from '@/components/icons/IconStars'
import IconTime from '@/components/icons/IconTime'
import IconEaseFactor from '@/components/icons/IconEaseFactor'
import IconRepetitions from '@/components/icons/IconRepetitions'
import IconNextReviewDate from '@/components/icons/IconNextReviewDate'

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
    reviewHistory: [{ date: new Date(), quality: 4 }],
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
          <div className='mt-6 flex w-[260px] flex-row rounded-xl border-2 border-gray-500 bg-gray-900 p-2 md:flex-col'>
            <div className='flex flex-col gap-y-2 px-4'>
              <div className='mt-2 flex flex-row justify-between border-gray-500'>
                <p className='custom-large-text mb-2'>
                  {dummyWordLearned.wordTraditional}
                </p>
                <div className='custom-large-text flex flex-row gap-x-1'>
                  <IconLevel classes='h-4 w-4 mt-2 text-gray-500' />
                  <p>{dummyWordLearned.tocflLevel}</p>
                </div>
              </div>
              <div className='border-b border-gray-500'>
                <p className=''>{dummyWordLearned.wordPinyin}</p>
                <p className='mb-4'>{dummyWordLearned.wordTranslation}</p>
              </div>
              <div className='flex flex-row justify-between mt-2'>
                <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
                  <IconRepetitions classes='h-4 w-4 mt-0.5' /> Repetitions:
                </p>
                <p className='custom-small-text'>
                  {dummyWordLearned.repetitions}
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
                  <IconStars classes='h-4 w-4 mt-0.5' />
                  Latest score:
                </p>
                <p className='custom-small-text'>
                  {
                    dummyWordLearned.reviewHistory[
                      dummyWordLearned.reviewHistory.length - 1
                    ].quality
                  }
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
                  <IconEaseFactor classes='h-4 w-4 mt-0.5' />
                  Ease factor:
                </p>
                <p className='custom-small-text'>
                  {dummyWordLearned.easeFactor}
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
                  <IconTime classes='h-4 w-4 mt-0.5' />
                  First seen:
                </p>
                <p className='custom-small-text'>
                  {formatTimeSince(dummyWordLearned.reviewHistory[0].date)}
                </p>
              </div>
              <div className='mb-3 flex flex-row justify-between'>
                <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
                  <IconNextReviewDate classes='h-4 w-4 mt-0.5' />
                  Next review:
                </p>
                <p className='custom-small-text'>
                  {formatTimeSince(dummyWordLearned.reviewHistory[0].date)}
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
