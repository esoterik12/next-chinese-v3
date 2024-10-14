import { useEffect } from 'react'
import { useAppContext } from '../context/ReviewSessionContext'

interface useKeyboardProps {
  show: boolean
  fetching: boolean
  completeCard: () => void
  handleShow: () => void
  voice: SpeechSynthesisVoice | undefined
}

export function useKeyboard({
  show,
  fetching,
  completeCard,
  handleShow,
  voice
}: useKeyboardProps) {
  const { dispatch, unfinishedWords } = useAppContext()
  const word = unfinishedWords[0]

  useEffect(() => {
    function keyDownHandler(e: globalThis.KeyboardEvent) {
      // Prevents key events if component is fetching
      if (unfinishedWords.length === 0 || fetching) {
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
  }, [show, completeCard, word, dispatch, voice, handleShow, unfinishedWords.length, fetching])
  // voice included to ensure handleShow renders with voice on first page load
}
