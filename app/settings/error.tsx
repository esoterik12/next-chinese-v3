'use client'
import DefaultButton from '@/components/buttons/DefaultButton'
import Link from 'next/link'

import { useEffect } from 'react'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // To do: develop
    console.error(error)
  }, [error])

  return (
    <div className='mt-20 flex w-full flex-col items-center'>
      <h2 className='text-xl font-bold'>Error</h2>
      <h2 className='text-lg'>Something went wrong!</h2>
      <Link
        href='/'
        className='text-primary-500 hover:text-primary-200 transition-colors duration-150'
      >
        <DefaultButton customClasses='custom-hover-effect custom-background p-2 w-[160px] m-4'>
          <p>Homepage</p>
        </DefaultButton>
      </Link>
    </div>
  )
}
