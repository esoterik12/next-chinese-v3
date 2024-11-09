'use client'
import { SectionConceptsData } from '@/types/grammar.types'

// Currently Unused - kept as alternative for accordion

const BasicGrammarSection = ({ topic }: { topic: SectionConceptsData }) => {
  return (
    <>
      {topic.sectionConcepts.map((concept, index) => (
        <div
          key={concept.subSection} className={`p-4 ${index < topic.sectionConcepts.length - 1 ? 'border-b-2' : ''}`}
        >
          <h3 className='custom-subheader text-sky-500'>
            {topic.conceptNumber}.{concept.subSection} - {concept.title}
          </h3>
          <p>{concept.explanation}</p>
          {concept.examples.map(example => (
            <div key={example.exNumber} className='px-4 py-2'>
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
      ))}
    </>
  )
}

export default BasicGrammarSection
