'use client'
import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SubSectionConcept } from '@/types/grammar.types'
import DefaultButton from '../buttons/DefaultButton'

interface AccordionProps {
  i: number
  conceptContent: SubSectionConcept
  conceptNumber: number
  expanded: boolean | number
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>
}

const Accordion = ({
  i,
  conceptContent,
  conceptNumber,
  expanded,
  setExpanded
}: AccordionProps) => {
  const isOpen = i === expanded

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      {/* Header section for selecting accordion */}
      <motion.header
        className='mb-4 flex h-10 cursor-pointer flex-row items-center rounded-lg'
        initial={false}
        // Set header colors here:
        animate={{ backgroundColor: isOpen ? '#0ea5e9' : '#111827' }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <p className='custom-small-text md:custom-text ml-4'>
          <span className={`font-semibold ${isOpen ? 'text-rose-600' : ''}`}>
            {conceptNumber}.{conceptContent.subSection}
          </span>{' '}
          - {conceptContent.title}
        </p>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className='overflow-hidden'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.97 }, open: { scale: 1 } }}
              transition={{ duration: 0.3 }}
            >
              <div className='p-4'>
                <p className='mb-2'>{conceptContent.explanation}</p>
                <DefaultButton
                  customClasses='w-32 border-2 border-sky-500 p-2'
                >
                  <p>Highlight</p>
                </DefaultButton>
                {conceptContent.examples.map(example => (
                  <div key={example.exNumber} className='py-2'>
                    <p className='font-semibold'>
                      <span className='text-rose-500'>
                        {conceptNumber}.{conceptContent.subSection}.
                        {example.exNumber}
                      </span>
                      : {example.exExplanation}
                    </p>
                    <p className='mb-2 text-gray-500'>{example.exStructure}</p>
                    <div className='px-4 py-2'>
                      <p>{example.exSimplified}</p>
                      <p>{example.exTraditional}</p>
                      <p>{example.exPinyin}</p>
                      <p>{example.exTranslation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

// TODO: any[]
export const AccordionStack = ({
  accordionContent,
  conceptNumber
}: {
  accordionContent: SubSectionConcept[]
  conceptNumber: number
}) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <div className='w-full'>
      {accordionContent.map((section, idx) => (
        <Accordion
          key={section.subSection}
          conceptContent={section}
          conceptNumber={conceptNumber}
          i={idx}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  )
}
