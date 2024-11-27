export const grammarTemplate = {
  subSection: 1,
  title: 'Common nouns',
  explanation:
    'Mandarin common nouns have a single, invariant form and do not indicate number, being understood as neither singular nor plural unless specified by modifiers. To express quantity, nouns are modified by a number and a classifier, as omitting the classifier is ungrammatical..',
  examples: [
    {
      exNumber: 1,
      exExplanation: '',
      exStructure: '',
      exSimplified: '',
      exTraditional: '',
      exPinyin: '',
      exTranslation: ''
    },
    {
      exNumber: 2,
      exExplanation: '.',
      exStructure: '',
      exSimplified: '',
      exTraditional: '',
      exPinyin: '',
      exTranslation: ''
    }
  ],
  notes: [
    '',
    '',
  ]
}

// This template file does not export
// It is a copy of the main types file to use in prompts
interface SubSectionExample {
  exNumber: number;
  exExplanation?: string;
  exStructure?: string;
  exSimplified: string;
  exTraditional: string;
  exPinyin: string;
  exTranslation: string;
}

interface SubSectionConcept {
  subSection: number;
  title: string;
  explanation: string;
  examples: SubSectionExample[];
  notes?: string[]
}

interface SectionConceptsData {
  sectionTitle: string,
  sectionLink: string,
  conceptNumber: number
  sectionConcepts: SubSectionConcept[];
}