import React from 'react'
import { grammar1PhraseOrder } from '@/lib/constants/grammar/grammar-1-phraseOrder'
import { AccordionStack } from '@/components/grammar/Accordion'
import BackButton from '@/components/buttons/BackButton'

const GrammarPhraseOrderPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar1PhraseOrder.conceptNumber
        }: {grammar1PhraseOrder.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar1PhraseOrder.conceptNumber}
        accordionContent={grammar1PhraseOrder.sectionConcepts}
      />
    </section>
  )
}

export default GrammarPhraseOrderPage
