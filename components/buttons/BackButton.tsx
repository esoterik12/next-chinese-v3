'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import IconBackArrow from '../icons/IconBackArrow'

interface BackButton {
  classes?: string
}

const BackButton = (props: BackButton) => {
  const router = useRouter()

  return (
    <button
      className={`${props.classes} transition-colors duration-150 hover:text-gray-300`}
      onClick={() => router.back()}
    >
      <IconBackArrow classes='h-6 w-6' />
    </button>
  )
}

export default BackButton
