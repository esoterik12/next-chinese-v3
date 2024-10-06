import { useEffect } from 'react'
import { useAppContext } from '../context/ReviewSessionContext'

interface useKeyboardProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export function useKeyboard({ show, setShow }: useKeyboardProps) {
  const { dispatch, unfinishedWords } = useAppContext()

  useEffect(() => {
    const word = unfinishedWords[0]

    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (unfinishedWords.length === 0) {
        return
      }
      if (!show && e.code === 'Space') {
        setShow(true)
      }
      if (show && /^[1-5]$/.test(e.key) && !word.seenToday) {
        setShow(false)
        dispatch({
          type: 'firstResult',
          firstResult: Number(e.key)
        })
      }
      if (show && e.key === '2' && word.seenToday) {
        setShow(false)
        dispatch({
          type: 'incorrectResult'
        })
      }
      if (show && e.key === '4' && word.seenToday) {
        setShow(false)
        dispatch({
          type: 'correctResult'
        })
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [show, setShow, unfinishedWords[0], dispatch])
}
