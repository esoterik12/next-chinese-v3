import { useEffect } from 'react'
import { useAppContext } from '../context/ReviewSessionContext'

interface useKeyboardProps {
  show: boolean
  completeCard: () => void
  handleShow: () => void
  voice: SpeechSynthesisVoice | undefined
}

export function useKeyboard({
  show,
  completeCard,
  handleShow,
  voice
}: useKeyboardProps) {
  const { dispatch, unfinishedWords } = useAppContext()
  const word = unfinishedWords[0]

  useEffect(() => {
    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (unfinishedWords.length === 0) {
        return
      }
      if (!show && e.code === 'Space') {
        handleShow()
      }
      if (show && /^[1-5]$/.test(e.key) && !word.seenToday) {
        completeCard()
        dispatch({
          type: 'firstResult',
          firstResult: Number(e.key)
        })
      }
      if (show && e.key === '2' && word.seenToday) {
        completeCard()
        dispatch({
          type: 'incorrectResult'
        })
      }
      if (show && e.key === '4' && word.seenToday) {
        completeCard()
        dispatch({
          type: 'correctResult'
        })
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [show, completeCard, word, dispatch, voice, handleShow, unfinishedWords.length])
  // voice included to ensure handleShow renders with voice on first page load
}
