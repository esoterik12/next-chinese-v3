'use client'
import { useState, useEffect } from 'react'
import GrammarModal from '../grammar/GrammarModal'
import DefaultButton from '../buttons/DefaultButton'
import IconPuzzle from '../icons/IconPuzzle'
import GrammarSelectMain from '../forms/GrammarSelectMain'
import { SectionConceptsData, SubSectionConcept } from '@/types/grammar.types'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import {
  grammarConcepts,
  loadGrammarConcepts,
  emptyConcept
} from '@/lib/constants/grammar/grammarConcepts'

interface OpenGrammarModal {
  modalVersion: 'prepLearnSession' | 'activeLearnSession'
}

const OpenGrammarModal = ({ modalVersion }: OpenGrammarModal) => {
  const { dispatch, selectedGrammarSection } = useReviewContext()
  const [isOpen, setIsOpen] = useState(false)

  // Dynamically import concepts
  const [dynamicConcepts, setDynamicConcepts] =
    useState<SectionConceptsData[]>(grammarConcepts)

  // Selected concept state
  const [selectedConcept, setSelectedConcept] =
    useState<SectionConceptsData | null>(null)
  const [selectedSection, setSelectedSection] =
    useState<SubSectionConcept | null>(selectedGrammarSection)

  // Trigger dynamic import when needed
  useEffect(() => {
    if (dynamicConcepts.length === 1 && dynamicConcepts[0] === emptyConcept) {
      ;(async () => {
        const loadedConcepts = await loadGrammarConcepts()
        setDynamicConcepts(loadedConcepts)
      })()
    }
  }, [dynamicConcepts])

  // find selected concept in grammarConcepts using the selectedGrammarSection
  useEffect(() => {
    if (selectedGrammarSection) {
      const concept = dynamicConcepts.find(concept =>
        concept.sectionConcepts.some(
          section => section === selectedGrammarSection
        )
      )
      setSelectedConcept(concept || null)
    }
  }, [selectedGrammarSection, dynamicConcepts])

  const handleModalClick = () => {
    setIsOpen(prevState => !prevState)
    if (selectedSection) {
      dispatch({ type: 'loadGrammar', selectedGrammar: selectedSection })
    }
  }

  console.log('selectedGrammarSection', selectedGrammarSection)

  return (
    <div className=''>
      <GrammarModal isOpen={isOpen} onClose={handleModalClick}>
        <p className='mb-4'>
          Add a grammar concept or section to your sentence generation to
          practice a specifc concept.
        </p>

        <GrammarSelectMain
          selectedConcept={selectedConcept}
          setSelectedConcept={setSelectedConcept}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          dynamicConcepts={dynamicConcepts}
        />
        {selectedSection && (
          <div className='mt-4 gap-2'>
            <h3 className='custom-text'>Examples:</h3>
            <div className='mt-4 flex flex-col gap-2'>
              {selectedSection.examples.map((example, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 ${index < selectedSection.examples.length - 1 && 'border-b border-zinc-800'} pb-2`}
                >
                  <p>
                    {index + 1}: {example.exTraditional}
                  </p>
                  <p>{example.exPinyin}</p>
                  <p>{example.exTranslation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </GrammarModal>
      {modalVersion === 'prepLearnSession' && (
        <DefaultButton
          customClasses='md:w-[138px] w-[60px] h-[44px] flex flex-row items-center justify-center custom-border p-2'
          handleClick={handleModalClick}
        >
          <IconPuzzle classes={`h-6 w-6 text-sky-500`} />
        </DefaultButton>
      )}
      {modalVersion === 'activeLearnSession' && (
        <button
          className='m-2 flex flex-row items-center justify-center p-2'
          onClick={handleModalClick}
        >
          <IconPuzzle classes='hover:text-zinc-400 transition-colors duration-300 h-6 w-6 text-sky-500' />
        </button>
      )}
    </div>
  )
}

export default OpenGrammarModal
