'use client'
import React from 'react'
import DefaultButton from './DefaultButton'
import Link from 'next/link'
import IconRightChevron from '../icons/IconRightChevron'

const HomePageButton = () => {
  return (
    <Link href='/learn'>
      <DefaultButton customClasses='w-44 mt-10 flex flex-row border-2 items-center justify-center gap-x-2 border-emerald-500 p-2'>
        <>
          <p>Learn Now</p>
          <IconRightChevron classes='h-4 w-4 mt-0.5' />
        </>
      </DefaultButton>
    </Link>
  )
}

export default HomePageButton
