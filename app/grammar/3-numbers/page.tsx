import React from 'react'
import PageContainer from '@/components/containers/PageContainer'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar3Numbers } from '@/lib/constants/grammar/grammar-3-numbers'

const GrammarPhraseOrderPage = () => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col mb-24'>
        <h1 className='custom-header my-2 md:my-4'>
          Grammar {grammar3Numbers.conceptNumber}: {grammar3Numbers.sectionTitle}
        </h1>
        <AccordionStack
          conceptNumber={grammar3Numbers.conceptNumber}
          accordionContent={grammar3Numbers.sectionConcepts}
        />
      </section>
    </PageContainer>
  )
}

export default GrammarPhraseOrderPage
