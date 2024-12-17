import React from 'react'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar2Nouns } from '@/lib/constants/grammar/grammar-2-nouns'
import BackButton from '@/components/buttons/BackButton'

const GrammarNounsPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar2Nouns.conceptNumber
        }: {grammar2Nouns.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar2Nouns.conceptNumber}
        accordionContent={grammar2Nouns.sectionConcepts}
      />
    </section>
  )
}

export default GrammarNounsPage
