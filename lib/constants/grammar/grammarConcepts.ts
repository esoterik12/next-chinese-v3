import { grammar1PhraseOrder } from '@/lib/constants/grammar/grammar-1-phraseOrder'
import { grammar2Nouns } from '@/lib/constants/grammar/grammar-2-nouns'
import { grammar3Numbers } from '@/lib/constants/grammar/grammar-3-numbers'
import { grammar4Specifiers } from './grammar-4-specifiers'
import { SectionConceptsData } from '@/types/grammar.types'

// This is used to created a list of grammar concepts in the learn page

const emptyConcept: SectionConceptsData = {
  title: 'No selection',
  conceptNumber: 0,
  sectionConcepts: []
}

export const grammarConcepts = [
  emptyConcept,
  grammar1PhraseOrder,
  grammar2Nouns,
  grammar3Numbers,
  grammar4Specifiers
]
