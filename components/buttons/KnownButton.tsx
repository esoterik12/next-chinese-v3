'use client'
import { useReviewContext } from '@/lib/context/ReviewSessionContext'
import IconCheckCircle from '../icons/IconCheckCircle'
import { SetStateAction } from 'react'
import { ShowSentenceOptions } from '../learn/ActiveLearnSession'

type Props = {
  setShow: React.Dispatch<SetStateAction<boolean>>
  setShowSent: React.Dispatch<SetStateAction<ShowSentenceOptions>>
}

const KnownButton = ({ setShow, setShowSent }: Props) => {
  const { dispatch } = useReviewContext()

  const handleKnownButton = () => {
    setShow(false)
    setShowSent('hidden')
    dispatch({
      type: 'firstResult',
      firstResult: 6
    })
  }

  return (
    <button
      id='knownButton'
      onClick={handleKnownButton}
      className='m-2 flex flex-row items-center justify-center p-2'
    >
      <IconCheckCircle classes='h-6 w-6 hover:text-zinc-400 transition-colors duration-300 h-6 w-6 text-emerald-500' />
    </button>
  )
}

export default KnownButton
