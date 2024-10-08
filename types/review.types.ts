import { GeneratedSentenceProps } from '@/components/cards/SentenceCard'
import { UserWordDocument } from '@/models/userword.model'
import { WordDocument } from '@/models/word.model'

export type ReviewResultDocument = UserWordDocument &
  WordDocument & {
    seenToday: boolean
    newSentencesArray: GeneratedSentenceProps[]
  }
