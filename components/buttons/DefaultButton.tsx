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
  textStyles
}: DefaultButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || 'button'}
      className={`custom-hover-effect bg-gray-900 rounded-lg p-2 disabled:cursor-not-allowed ${customClasses}`}
      disabled={isDisabled}
    >
      <div className=''>{children}</div>
    </button>
  )
}

export default DefaultButton
