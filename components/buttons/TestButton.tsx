'use client'
import React from 'react'
import { testDbFunction } from '@/lib/actions/testDbFunction'

const TestButton = () => {
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
