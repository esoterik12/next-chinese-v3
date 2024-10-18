'use client'
import React from 'react'
import IconTraditional from '../icons/IconTraditional'
import IconSimplified from '../icons/IconSimplified'
import { useAppContext } from '@/lib/context/ReviewSessionContext'

const ToggleCharacters = () => {
  const { dispatch, characterState } = useAppContext()

  const toggleCharacterState = () => {
    dispatch({ type: 'toggleCharacterState' })
  }

  const toggleClasses =
    'text-gray-400 text-xl transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  return (
    <button className='m-0 h-7 p-0' onClick={() => toggleCharacterState()}>
      {characterState === 'simplified' ? (
        <IconSimplified classes={toggleClasses} />
      ) : (
        <IconTraditional classes={toggleClasses} />
      )}
    </button>
  )
}

export default ToggleCharacters
