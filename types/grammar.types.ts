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
  subSection: number;
  title: string;
  explanation: string;
  examples: SubSectionExample[];
}

export interface SectionConceptsData {
  sectionTitle: string,
  sectionLink: string,
  conceptNumber: number
  sectionConcepts: SubSectionConcept[];
}
