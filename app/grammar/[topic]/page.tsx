import React from 'react'
import { dummyGrammar } from '@/lib/constants/dummyGrammar'
import PageContainer from '@/components/containers/PageContainer'
import { AccordionStack } from '@/components/grammar/Accordion'

const GrammarTopicPage = ({ params }: { params: { topic: string } }) => {
  // Use dynamic params.topic to simulate fetching relevant object
  const topic = dummyGrammar.filter(
    item => item.sectionLink === params.topic
  )[0]

  return (
    <PageContainer customClasses='p-4 lg:px-12'>
      <section className='flex flex-col'>
        <h1 className='custom-header my-2 md:my-4'>
          Grammar {topic.conceptNumber}: {topic.sectionTitle}
        </h1>
        <AccordionStack
          conceptNumber={topic.conceptNumber}
          accordionContent={topic.sectionConcepts}
        />
      </section>
    </PageContainer>
  )
}

export default GrammarTopicPage
