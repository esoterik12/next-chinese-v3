'use client'
import { SubSectionConcept } from '@/types/grammar.types'
import { createContext, useContext, useReducer, ReactNode } from 'react'

interface GrammarReducerAction {
  type:
    | 'addConcept'
    | 'removeConcept'
    | 'resetState'
    | 'setError'
    | 'startLoading'
    | 'endLoading'
  error?: null | string
  concept: SubSectionConcept
}

interface GrammarContextTypes {
  concepts: SubSectionConcept[]
  error: null | string
  loadingState: boolean
  dispatch: React.Dispatch<GrammarReducerAction>
}

interface GrammarReducerState {
  concepts: SubSectionConcept[]
  error: string | null
  loadingState: boolean
}

const initialContext: GrammarReducerState = {
  concepts: [],
  error: null,
  loadingState: false
}

const reducer = (
  state: GrammarReducerState,
  action: GrammarReducerAction
): GrammarReducerState => {
  // Will get a subsection object from grammar page / load page

  switch (action.type) {
    case 'addConcept':
      if (!action.concept) {
        return {
          error: 'Invalid grammar context input',
          ...state
        }
      }

      return {
        concepts: [...state.concepts, action.concept],
        ...state
      }

    case 'resetState':
      return {
        ...initialContext
      }

    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const GrammarContext = createContext<GrammarContextTypes | null>(null)

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
