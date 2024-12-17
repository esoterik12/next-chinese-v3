'use client'
import { useSelect } from 'downshift'
import React from 'react'
import { SectionConceptsData, SubSectionConcept } from '@/types/grammar.types'

interface CustomDropdown {
  dropdownItems: SectionConceptsData[] | SubSectionConcept[]
  selectedItem: SectionConceptsData | SubSectionConcept
  setSelectedItem: React.Dispatch<
    React.SetStateAction<SectionConceptsData | SubSectionConcept>
  >
  placeholder: string
  // Secondary state is added so a change to primary state can also reset the secondary state
  secondaryState?: SubSectionConcept
  setSecondaryState?: React.Dispatch<
    React.SetStateAction<SectionConceptsData | SubSectionConcept>
  >
  width: string
}

export function CustomDropdown({
  dropdownItems,
  selectedItem,
  setSelectedItem,
  placeholder,
  secondaryState,
  setSecondaryState,
  width
}: CustomDropdown) {
  function itemToString(item: SectionConceptsData | SubSectionConcept) {
    return item ? item.title : ''
  }

  function Select() {
    const {
      isOpen,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps
    } = useSelect({
      items: dropdownItems,
      itemToString,
      selectedItem,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        // Reset secondary state if changing primary state
        if (secondaryState) {
          setSecondaryState(null)
        }
        setSelectedItem(newSelectedItem)
      }
    })

    return (
      <div>
        {/* width is being passed as md:w-[XYZpx] */}
        <div className={`flex ${width} border rounded-lg border-gray-800 focus:border-sky-500 flex-col gap-1`}>
          <div
            className='flex cursor-pointer justify-between rounded-lg bg-gray-900 p-2'
            {...getToggleButtonProps()}
          >
            {/* Sets the placeholder or shows the selected state*/}
            <span className=''>
              {selectedItem ? selectedItem.title : placeholder}
            </span>
            {/* Dropdown arrows */}
            <span className='px-2'>{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
          </div>
        </div>
        <ul
          className={`absolute z-10 mt-1 max-h-80 border border-gray-800 ${width} overflow-scroll rounded-lg bg-gray-900 p-0 shadow-md ${
            !isOpen && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            dropdownItems.map((item, index) => (
              <li
                className={`${highlightedIndex === index && 'bg-sky-500'} flex flex-col px-3 py-2 shadow-sm`}
                key={item.title}
                {...getItemProps({ item, index })}
              >
                <span className=''>{item.title}</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }

  return <Select />
}
