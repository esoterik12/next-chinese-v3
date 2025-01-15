import React from 'react'
import { AccordionStack } from '@/components/grammar/Accordion'
import BackButton from '@/components/buttons/BackButton'
import { grammar6NounPhrases } from '@/lib/constants/grammar/grammar-6-nounPhrases'

const GrammarNounPhrasesPage = () => {
  return (
    <section className='mb-24 flex flex-col'>
      <h1 className='custom-header my-2 md:my-4'>
        <BackButton classes='mx-2 text-gray-400' />
        Grammar {
          grammar6NounPhrases.conceptNumber
        }: {grammar6NounPhrases.title}
      </h1>
      <AccordionStack
        conceptNumber={grammar6NounPhrases.conceptNumber}
        accordionContent={grammar6NounPhrases.sectionConcepts}
      />
    </section>
  )
}

export default GrammarNounPhrasesPage
