import { useState, useEffect } from 'react'

export default function useVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice>()

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices()
      if (availableVoices.length > 0) {
        setVoices(availableVoices.find(voice => voice.lang === 'zh-TW'))
      }
    }

    // Load voices initially
    loadVoices()

    // Add an event listener to detect when voices change
    window.speechSynthesis.onvoiceschanged = loadVoices

    return () => {
      // Clean up event listener
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  return voices
}
