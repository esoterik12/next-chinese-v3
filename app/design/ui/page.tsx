'use client'
import WordCard from '@/components/cards/WordCard'
import { useState } from 'react'
import SentenceCard from '@/components/cards/SentenceCard'

export default function UiDesignPage() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(prevState => !prevState)
  }

  return (
    <main className='flex h-[calc(100vh-64px)] flex-col items-center'>
      {/* First section, takes up 50% */}
      <section className='mt-6 flex h-full w-full flex-grow flex-col items-center justify-center'>
        <WordCard handleClick={handleShow} show={show} />
        <SentenceCard />
      </section>

      {/* Second section, takes up 25% */}
      <section className='flex h-1/4 flex-col'></section>
    </main>
  )
}
