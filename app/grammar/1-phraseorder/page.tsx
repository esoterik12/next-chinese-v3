import React from 'react'
import PageContainer from '@/components/containers/PageContainer'
import { grammar1PhraseOrder } from '@/lib/constants/grammar/grammar-1-phraseOrder'
import { AccordionStack } from '@/components/grammar/Accordion'


const GrammarPhraseOrderPage = () => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col mb-24'>
        <h1 className='custom-header my-2 md:my-4'>
          Grammar {grammar1PhraseOrder.conceptNumber}: {grammar1PhraseOrder.sectionTitle}
        </h1>
        <AccordionStack
          conceptNumber={grammar1PhraseOrder.conceptNumber}
          accordionContent={grammar1PhraseOrder.sectionConcepts}
        />
      </section>
    </PageContainer>
  )
}

export default GrammarPhraseOrderPage
