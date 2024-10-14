'use client'
import React from 'react'

const TestButton = () => {
  const handleTestClick = async () => {
    console.log('no function here')
    // await deleteSentenceArray()
  }

  return (
    <div>
      <button onClick={handleTestClick}>Test DB Function</button>
    </div>
  )
}

export default TestButton
