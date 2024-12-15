import React from 'react'
import PageContainer from '@/components/containers/PageContainer'
import { AccordionStack } from '@/components/grammar/Accordion'
import { grammar2Nouns } from '@/lib/constants/grammar/grammar-2-nouns'

const GrammarNounsPage = () => {
  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col mb-24'>
        <h1 className='custom-header my-2 md:my-4'>
          Grammar {grammar2Nouns.conceptNumber}: {grammar2Nouns.sectionTitle}
        </h1>
        <AccordionStack
          conceptNumber={grammar2Nouns.conceptNumber}
          accordionContent={grammar2Nouns.sectionConcepts}
        />
      </section>
    </PageContainer>
  )
}

export default GrammarNounsPage
