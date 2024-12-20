import React from 'react'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar4Specifiers } from '@/lib/constants/grammar/grammar-4-specifiers'
import BackButton from '@/components/buttons/BackButton'

const GrammarSpecifiersPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar4Specifiers.conceptNumber
        }: {grammar4Specifiers.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar4Specifiers.conceptNumber}
        accordionContent={grammar4Specifiers.sectionConcepts}
      />
    </section>
  )
}

export default GrammarSpecifiersPage
