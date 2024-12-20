export interface SubSectionExample {
  exNumber: number;
  exExplanation: string;
  exStructure?: string;
  exSimplified: string;
  exTraditional: string;
  exPinyin: string;
  exTranslation: string;
}

export interface SubSectionConcept {
  subSectionNumber: number;
  title: string;
  explanation: string;
  examples: SubSectionExample[];
  notes?: string[]
}

export interface SectionConceptsData {
  title: string,
  conceptNumber: number
  sectionConcepts: SubSectionConcept[];
}