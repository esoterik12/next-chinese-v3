import React from 'react'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar5Classifiers } from '@/lib/constants/grammar/grammar-5-classifiers'
import BackButton from '@/components/buttons/BackButton'

const GrammarSpecifiersPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar5Classifiers.conceptNumber
        }: {grammar5Classifiers.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar5Classifiers.conceptNumber}
        accordionContent={grammar5Classifiers.sectionConcepts}
      />
    </section>
  )
}

export default GrammarSpecifiersPage
