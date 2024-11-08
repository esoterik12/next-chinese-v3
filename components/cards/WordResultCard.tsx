import { ReviewResultDocument } from '@/types/review.types'
import { formatTimeSince } from '@/lib/utils/formatTimeSince'
import IconLevel from '@/components/icons/IconLevel'
import IconStars from '@/components/icons/IconStars'
import IconTime from '@/components/icons/IconTime'
import IconEaseFactor from '@/components/icons/IconEaseFactor'
import IconNextReviewDate from '@/components/icons/IconNextReviewDate'
import IconViews from '../icons/IconViews'
import formatCalendarDate from '@/lib/utils/formatCalendarDate'

const WordResultCard = ({ word }: { word: ReviewResultDocument }) => {
  return (
    <section className='hidden w-[260px] flex-row rounded-xl border-gray-500 bg-gray-900 p-2 md:flex md:flex-col'>
      <div className='flex flex-col gap-y-2 px-4'>
        <div className='mt-2 flex flex-row justify-between border-gray-500'>
          <p className='custom-large-text mb-2'>{word.wordTraditional}</p>
          <div className='custom-large-text flex flex-row gap-x-1'>
            <IconLevel classes='h-4 w-4 mt-2 text-gray-500' />
            <p>{word.tocflLevel}</p>
          </div>
        </div>
        <div className='border-b border-gray-500'>
          <p className=''>{word.wordPinyin}</p>
          <p className='mb-4'>{word.wordTranslation}</p>
        </div>
        <div className='mt-2 flex flex-row justify-between'>
          <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
            <IconViews classes='h-4 w-4 mt-0.5' /> Views:
          </p>
          <p className='custom-small-text'>{word.reviewHistory.length}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
            <IconStars classes='h-4 w-4 mt-0.5' />
            Latest score:
          </p>
          <p className='custom-small-text'>
            {word.reviewHistory[word.reviewHistory.length - 1].quality}
          </p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
            <IconEaseFactor classes='h-4 w-4 mt-0.5' />
            Ease factor:
          </p>
          <p className='custom-small-text'>{word.easeFactor}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
            <IconTime classes='h-4 w-4 mt-0.5' />
            First seen:
          </p>
          <p className='custom-small-text'>
            {formatTimeSince(new Date(word.reviewHistory[0].date))}
          </p>
        </div>
        <div className='mb-3 flex flex-row justify-between'>
          <p className='custom-small-text flex flex-row gap-x-1 text-gray-400'>
            <IconNextReviewDate classes='h-4 w-4 mt-0.5' />
            Next view:
          </p>
          <p className='custom-small-text'>
            {formatTimeSince(new Date(word.nextReviewDate))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WordResultCard
