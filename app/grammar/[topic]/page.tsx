'use client'
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
        {/* {topic.sectionConcepts.map((concept, index) => (
          <div
            className={`p-4 ${index < topic.sectionConcepts.length - 1 ? 'border-b-2' : ''}`}
          >
            <h3 className='custom-subheader text-sky-500'> 
              {topic.conceptNumber}.{concept.subSection} - {concept.title}
            </h3>
            <p>{concept.explanation}</p>
            {concept.examples.map(example => (
              <div key={example.exNumber} className='py-2 px-4'>
                <p className='font-semibold'>
                  {topic.conceptNumber}.{concept.subSection}.{example.exNumber}:{' '}
                  {example.exExplanation}
                </p>
                <p className='mb-2 text-gray-500'>{example.exStructure}</p>
                <div className='px-4 py-2'>
                  <p>{example.exSimplified}</p>
                  <p>{example.exTraditional}</p>
                  <p>{example.exPinyin}</p>
                  <p>{example.exTranslation}</p>
                </div>
              </div>
            ))}
          </div>
        ))} */}

        <AccordionStack conceptNumber={topic.conceptNumber} accordionContent={topic.sectionConcepts} />
      </section>
    </PageContainer>
  )
}

export default GrammarTopicPage
