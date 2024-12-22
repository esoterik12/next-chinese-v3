export const emptyConcept = {
  title: 'No selection',
  conceptNumber: 0,
  sectionConcepts: []
};

export const grammarConcepts = [emptyConcept]; 

// dynamically import when needed.
export const loadGrammarConcepts = async () => {
  const [grammar1, grammar2, grammar3, grammar4] = await Promise.all([
    import('@/lib/constants/grammar/grammar-1-phraseOrder').then(
      (mod) => mod.grammar1PhraseOrder
    ),
    import('@/lib/constants/grammar/grammar-2-nouns').then(
      (mod) => mod.grammar2Nouns
    ),
    import('@/lib/constants/grammar/grammar-3-numbers').then(
      (mod) => mod.grammar3Numbers
    ),
    import('@/lib/constants/grammar/grammar-4-specifiers').then(
      (mod) => mod.grammar4Specifiers
    )
  ]);

  return [emptyConcept, grammar1, grammar2, grammar3, grammar4];
};
