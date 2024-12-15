import { useState, useEffect } from 'react'

export default function useVoices() {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices()
      if (availableVoices.length > 0) {
        const zhTWVoice = availableVoices.find(voice => voice.lang === 'zh-TW')
        setVoice(zhTWVoice || null) // Ensure fallback to null
      }
    }

    // Load voices initially
    loadVoices()

    // Add event listener for voices change
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)

    // Clean up event listener
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
    }
  }, [])

  return voice
}
