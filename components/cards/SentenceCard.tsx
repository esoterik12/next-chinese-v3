'use client'
import React from 'react'
import { dummySentenceData } from '@/lib/dummyData'
import DefaultButton from '../buttons/DefaultButton'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SentenceVote from './SentenceVote'
import { useAppContext } from '@/lib/context/ReviewSessionContext'

const SentenceCard = () => {
  const { dispatch, unfinishedWords, loading } = useAppContext()
  const [sentence, setSentence] = useState(false)
  const handleSentence = () => {
    setSentence(prevState => !prevState)
  }

  console.log('unfinishedWords in sentence card', unfinishedWords)

  return (
    <div className='mt-2 flex h-[40px] flex-col'>
      <AnimatePresence mode='wait'>
        {!sentence && (
          <AnimatedSection key='sentenceButton'>
            <DefaultButton
              handleClick={handleSentence}
              customClasses='custom-hover-effect p-2 w-[250px]'
            >
              <p>Context</p>
            </DefaultButton>
          </AnimatedSection>
        )}
        {sentence && (
          <AnimatedSection
            key='sentenceAnswer'
            classes='flex flex-col gap-1 p-4'
          >
            <>
              <p className='custom-large-text'>
                {dummySentenceData[0].traditional}
              </p>
              <p className='custom-small-text'>{dummySentenceData[0].pinyin}</p>
              <p className='custom-small-text custom-gray-text'>
                {dummySentenceData[0].translation}
              </p>
              <SentenceVote
                sentenceUpvotes={dummySentenceData[0].upvotes}
                sentenceDownvotes={dummySentenceData[0].downvotes}
              />
            </>
          </AnimatedSection>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SentenceCard
