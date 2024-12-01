'use client'
import React from 'react'
import { setLevel } from '@/lib/actions/words/setLevel'

const TestButton = ({userId}: {userId: string}) => {
  const handleTestClick = async () => {
    await setLevel({userId: userId, selectedLevel: 2, userLatestWord: 420})
  }

  return (
    <div>
      <button onClick={handleTestClick}>Test DB Function</button>
    </div>
  )
}

export default TestButton
