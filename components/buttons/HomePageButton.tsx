'use client'
import React from 'react'
import DefaultButton from './DefaultButton'
import Link from 'next/link'
import IconRightChevron from '../icons/IconRightChevron'

const HomePageButton = () => {
  return (
    <DefaultButton customClasses='w-44 mt-10 border-2 border-emerald-500 p-2'>
      <Link className='flex flex-row gap-x-2 items-center justify-center' href='/learn'>
        <p>Start Learning</p>
        <IconRightChevron classes='h-4 w-4 mt-0.5' />
      </Link>
    </DefaultButton>
  )
}

export default HomePageButton
