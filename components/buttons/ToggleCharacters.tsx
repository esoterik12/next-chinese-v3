'use client'
import React from 'react'
import IconTraditional from '../icons/IconTraditional'
import IconSimplified from '../icons/IconSimplified'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'

const ToggleCharacters = ({id}: {id?: string}) => {
  const { dispatch, characterState } = useReviewContext()

  const toggleCharacterState = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'toggleCharacterState' })
    // Unfocus the button after clicking
    e.currentTarget.blur()
  }

  const toggleClasses =
    'text-gray-400 text-xl transition-colors duration-300 hover:text-gray-300 hover:cursor-pointer'

  return (
    <button id={id} className='m-0 h-7 p-0' onClick={toggleCharacterState}>
      {characterState === 'simplified' ? (
        <IconSimplified classes={toggleClasses} />
      ) : (
        <IconTraditional classes={toggleClasses} />
      )}
    </button>
  )
}

export default ToggleCharacters
