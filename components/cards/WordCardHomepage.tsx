'use client'
import React from 'react'
import WordCard from './WordCard'
import { useState } from 'react'
type Props = {}

const WordCardHomepage = (props: Props) => {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(prevState => !prevState)
  }

  return (
    <WordCard handleClick={handleShow} show={show} />
  )
}

export default WordCardHomepage