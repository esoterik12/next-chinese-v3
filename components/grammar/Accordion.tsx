'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SubSectionConcept } from '@/types/grammar.types'

interface AccordionProps {
  i: number
  conceptNumber: number
  conceptContent: SubSectionConcept
  expanded: boolean | number
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>
  notes?: string[]
}

const Accordion = ({
  i,
  conceptNumber,
  conceptContent,
  expanded,
  setExpanded,
  notes
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
        animate={{ backgroundColor: isOpen ? '#0ea5e9' : '#18181b' }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className='custom-small-text flec-row md:custom-text ml-4 flex'>
          <p className='w-[30px] font-semibold '>
            {conceptNumber}.{conceptContent.subSectionNumber}
          </p>
          <p className='ml-3'>{conceptContent.title}</p>
        </div>
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
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.97 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
            >
              <div className='p-4'>
                <p className='mb-2'>{conceptContent.explanation}</p>
                {conceptContent.examples.map(example => (
                  <div key={example.exNumber} className='py-2'>
                    <p className='font-semibold'>
                      <span className='text-rose-500'>
                        {conceptNumber}.{conceptContent.subSectionNumber}.
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
                {notes && notes.length > 0 && (
                  <p className='font-semibold text-rose-500'>Notes:</p>
                )}
                <div>
                  <ul className='list-disc pl-5'>
                    {notes &&
                      notes.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const AccordionStack = ({
  conceptNumber,
  accordionContent
}: {
  conceptNumber: number
  accordionContent: SubSectionConcept[]
}) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(false)

  return (
    <div className='w-full'>
      {accordionContent.map((section, idx) => (
        <Accordion
          conceptNumber={conceptNumber}
          key={section.subSectionNumber}
          conceptContent={section}
          i={idx}
          expanded={expanded}
          setExpanded={setExpanded}
          notes={section.notes}
        />
      ))}
    </div>
  )
}
