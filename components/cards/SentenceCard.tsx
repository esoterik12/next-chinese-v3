import React from 'react'
import { dummySentenceData } from '@/lib/dummyData'
import DefaultButton from '../buttons/DefaultButton'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

type SentenceCardProps = {}

const SentenceCard = (props: SentenceCardProps) => {
  const [sentence, setSentence] = useState(false)
  const handleSentence = () => {
    setSentence(prevState => !prevState)
  }

  return (
    <div className='mt-2 flex h-[40px] flex-col'>
      <AnimatePresence mode='wait'>
        {!sentence && (
          <AnimatedSection
            key='sentenceButton'
          >
            <DefaultButton
              handleClick={handleSentence}
              customClasses='custom-hover-effect w-[250px]'
            >
              <p>Context</p>
            </DefaultButton>
          </AnimatedSection>
        )}
        {sentence && (
          <AnimatedSection
          key='sentenceAnswer'
          >
            <div className='p-4 text-center'>
              <p className='custom-large-text'>{dummySentenceData[0].traditional}</p>
              <p className='custom-small-text'>{dummySentenceData[0].pinyin}</p>
              <p className='custom-small-text custom-gray-text'>
                {dummySentenceData[0].translation}
              </p>
            </div>
          </AnimatedSection>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SentenceCard
