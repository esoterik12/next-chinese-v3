import React, { SetStateAction } from 'react'
import { grammarConcepts } from '@/lib/constants/grammar/grammarConcepts'
import { SectionConceptsData, SubSectionConcept } from '@/types/grammar.types'
import { CustomDropdown } from './CustomDropdown'

interface GrammarSelectMain {
  selectedConcept: SectionConceptsData
  setSelectedConcept: React.Dispatch<SetStateAction<SectionConceptsData>>
  selectedSection: SubSectionConcept
  setSelectedSection: React.Dispatch<SetStateAction<SubSectionConcept>>
}

const GrammarSelectMain = ({
  selectedConcept,
  setSelectedConcept,
  selectedSection,
  setSelectedSection
}: GrammarSelectMain) => {
  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        {/* First Dropdown */}
        <CustomDropdown
          selectedItem={selectedConcept}
          setSelectedItem={setSelectedConcept}
          dropdownItems={grammarConcepts}
          placeholder='Select a concept'
          secondaryState={selectedSection}
          setSecondaryState={setSelectedSection}
          width='w-[300px]'
        />
        {selectedConcept && selectedConcept.conceptNumber !== 0 && (
          <CustomDropdown
            selectedItem={selectedSection}
            setSelectedItem={setSelectedSection}
            placeholder='Select a section'
            dropdownItems={selectedConcept.sectionConcepts}
            width='w-[300px]'
          />
        )}
      </div>
    </div>
  )
}

export default GrammarSelectMain
