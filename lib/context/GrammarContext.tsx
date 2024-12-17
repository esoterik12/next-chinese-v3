'use client'
import { SubSectionConcept } from '@/types/grammar.types'
import { createContext, useContext, useReducer, ReactNode } from 'react'

type GrammarReducerAction =
  // THe toggleConcept gives the overall conceptNumber and the subConceptNumber can be accessed withing the concept object
  | { type: 'toggleConcept'; concept: GrammarContextConcept }
  | { type: 'removeConcept'; concept: GrammarContextConcept }
  | { type: 'resetState' }
  | { type: 'setError'; error: string }
  | { type: 'startLoading' }
  | { type: 'endLoading' }

export type GrammarContextConcept = {
  conceptContextId: string
  conceptTitle: string
  concept: SubSectionConcept
}

interface GrammarReducerState {
  concepts: GrammarContextConcept[]
  error: string | null
  loadingState: boolean
  dispatch: React.Dispatch<GrammarReducerAction>
}

const initialContext: GrammarReducerState = {
  concepts: [],
  error: null,
  loadingState: false,
  dispatch: () => {}
}

const reducer = (
  state: GrammarReducerState,
  action: GrammarReducerAction
): GrammarReducerState => {
  const currentConcepts = [...state.concepts]

  switch (action.type) {
    case 'toggleConcept': {
      if (!action.concept) {
        return {
          error: 'Invalid grammar context input',
          ...state
        }
      }
      const exists = currentConcepts.some(
        item => item.conceptContextId === action.concept.conceptContextId
      )

      if (exists) {
        // Remove the concept if it already exists
        const updatedConcepts = currentConcepts.filter(
          item => item.conceptContextId !== action.concept.conceptContextId
        )
        return {
          ...state,
          concepts: updatedConcepts
        }
      }

      // Add the concept if it does not exist, limit to 3 items
      if (currentConcepts.length >= 3) {
        currentConcepts.pop() // Remove the last element to keep the size at 3
      }

      return {
        ...state,
        concepts: [action.concept, ...currentConcepts]
      }
    }
    case 'removeConcept':
      console.log('Clicking remove')
      const updatedConcepts = currentConcepts.filter(
        item => item.conceptContextId !== action.concept.conceptContextId
      )
      return {
        concepts: [...updatedConcepts],
        ...state
      }
    case 'resetState':
      return {
        ...initialContext
      }
    case 'setError':
      return {
        ...state,
        error: action.error || 'An unknown error occurred',
        loadingState: false
      }
    case 'startLoading':
      return {
        ...state,
        loadingState: true,
        error: null
      }
    case 'endLoading':
      return {
        ...state,
        loadingState: false
      }
    default:
      throw new Error('Unknown action in grammar context.')
  }
}

const GrammarContext = createContext<GrammarReducerState>(initialContext)

const GrammarContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialContext)

  return (
    <GrammarContext.Provider
      value={{
        concepts: state.concepts,
        error: state.error,
        loadingState: state.loadingState,
        dispatch
      }}
    >
      {children}
    </GrammarContext.Provider>
  )
}

const useGrammarContext = () => {
  const grammarContext = useContext(GrammarContext)
  if (!grammarContext) {
    throw new Error('useGrammarContext must be used within an AppProvider')
  }
  return grammarContext
}

export { GrammarContextProvider, useGrammarContext }
