import React from 'react'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar3Numbers } from '@/lib/constants/grammar/grammar-3-numbers'
import BackButton from '@/components/buttons/BackButton'

const GrammarPhraseOrderPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar3Numbers.conceptNumber
        }: {grammar3Numbers.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar3Numbers.conceptNumber}
        accordionContent={grammar3Numbers.sectionConcepts}
      />
    </section>
  )
}

export default GrammarPhraseOrderPage
