import { useState } from 'react'
import { grammarConcepts } from '@/lib/constants/grammar/grammarConcepts'
import { SectionConceptsData, SubSectionConcept } from '@/types/grammar.types'
import { CustomDropdown } from './CustomDropdown'

const GrammarSelectMain = () => {
  // State for selected concept and section
  const [selectedConcept, setSelectedConcept] =
    useState<SectionConceptsData | null>(null)
  const [selectedSection, setSelectedSection] =
    useState<SubSectionConcept | null>(null)

  return (
    <div className=''>
      <div className='flex flex-col gap-8 md:flex-row'>
        {/* First Dropdown */}
        <CustomDropdown
          selectedItem={selectedConcept}
          setSelectedItem={setSelectedConcept}
          dropdownItems={grammarConcepts}
          placeholder='Select a concept'
          secondaryState={selectedSection}
          setSecondaryState={setSelectedSection}
          width='w-[330px] md:w-[220px]'
        />
        {selectedConcept && selectedConcept.conceptNumber !== 0 && (
          <CustomDropdown
            selectedItem={selectedSection}
            setSelectedItem={setSelectedSection}
            placeholder='Select a section'
            dropdownItems={selectedConcept.sectionConcepts}
            width='w-[330px] md:w-[470px]'
          />
        )}
      </div>
    </div>
  )
}

export default GrammarSelectMain
