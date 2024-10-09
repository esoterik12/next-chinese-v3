'use client'
import React, { MouseEventHandler, ReactElement } from 'react'

interface DefaultButtonProps {
  children: ReactElement
  isDisabled?: boolean
  customClasses?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
}

const DefaultButton = ({
  children,
  isDisabled,
  customClasses,
  handleClick,
  btnType,
}: DefaultButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || 'button'}
      className={`custom-hover-effect rounded-lg disabled:cursor-not-allowed ${customClasses}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default DefaultButton
