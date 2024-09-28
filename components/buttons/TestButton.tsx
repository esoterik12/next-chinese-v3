'use client'
import React from 'react'
import { testDbFunction } from '@/lib/actions/testDbFunction'
type Props = {}

const TestButton = (props: Props) => {
  const handleTestClick = async () => {
    testDbFunction()
  }

  return (
    <div>
      <button onClick={handleTestClick}>Test DB Function</button>
    </div>
  )
}

export default TestButton
