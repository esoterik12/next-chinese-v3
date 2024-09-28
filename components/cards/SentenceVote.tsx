import React from 'react'
import DefaultButton from '../buttons/DefaultButton'

type SentenceVoteProps = {
  sentenceUpvotes: number
  sentenceDownvotes: number
}

const SentenceVote = ({
  sentenceUpvotes,
  sentenceDownvotes
}: SentenceVoteProps) => {
  return (
    <div className='flex flex-row items-center justify-center gap-2 p-2'>
      <p className='custom-small-text custom-gray-text'>{sentenceUpvotes}</p>
      <DefaultButton customClasses='rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </DefaultButton>
      <DefaultButton customClasses='rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </DefaultButton>
      <p className='custom-small-text custom-gray-text'>{sentenceDownvotes}</p>
    </div>
  )
}

export default SentenceVote
