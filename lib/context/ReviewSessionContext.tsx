'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import sm2 from '../sm2/sm2Algo'
import { ReviewResultDocument } from '@/types/review.types'
import { GeneratedSentenceProps } from '@/components/cards/SentenceCard'

// Unfinished: temporary any state until word types defined
interface AppContextTypes {
  unfinishedWords: any[]
  finishedWords: any[]
  loading: boolean
  dispatch: React.Dispatch<ReducerAction>
}

// firstResult are the first 1-5 easeFactor outcome that the user inputs
// correct and incorrect are subsequent views, incorrect returns the word to the unfinished queue
interface ReducerAction {
  type:
    | 'loadWords'
    | 'addSentence'
    | 'firstResult'
    | 'correctResult'
    | 'incorrectResult'
  firstResult?: number
  fetchedWords?: ReviewResultDocument[]
  newSentence?: GeneratedSentenceProps
}

interface ReducerState {
  unfinishedWords: ReviewResultDocument[]
  finishedWords: ReviewResultDocument[]
  loading: boolean
  error: string | null
}

const initialContext = {
  unfinishedWords: [],
  finishedWords: [],
  loading: true,
  error: null
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  // Get the current word - should always be at the start of the unfinished array
  const currentUnfinishedWords = [...state.unfinishedWords]
  const word = currentUnfinishedWords.shift() // Get the first word

  // Loads fetchedWords into the context
  switch (action.type) {
    case 'loadWords':
      if (action.fetchedWords) {
        return {
          ...state,
          loading: false,
          unfinishedWords: action.fetchedWords,
          finishedWords: []
        }
      }

    // Adds a generated sentence into an array for new sentences generated
    case 'addSentence':
      // Return state if no payload or no word
      if (!action.newSentence || !word) {
        return { ...state }
      }

      // Puts the new sentence in the word variable
      // Creates a new copy of the word and its sentences array
      const updatedWord = {
        ...word,
        newSentencesArray: [...word.newSentencesArray, action.newSentence]
      }
      // Keeps the active word at the front of the array
      return {
        ...state,
        unfinishedWords: [updatedWord, ...currentUnfinishedWords]
      }
    case 'firstResult':
      // Return state if no payload or no word
      if (!action.firstResult || !word) {
        return { ...state }
      }

      // First add outcome of this review session to reviewHistory
      word.reviewHistory.push({
        date: Date.now(),
        quality: action.firstResult
      })

      // Compute new sm2 values based on result and previous values
      const { n, ef, i } = sm2(
        action.firstResult,
        word.repetitions,
        word.easeFactor,
        word.interval
      )

      // Update new sm2 values
      word.repetitions = n
      word.easeFactor = ef
      word.interval = i
      // Add new property to signal the words has been seen
      word.seenToday = true

      // If result >= 3 then add the word to finishedWords
      if (action.firstResult >= 3) {
        return {
          ...state,
          unfinishedWords: currentUnfinishedWords,
          finishedWords: [...state.finishedWords, word]
        }
      } else {
        // Otherwise return it to the unfinished words to be seen once more until correct
        return {
          ...state,
          unfinishedWords: [...currentUnfinishedWords, word]
        }
      }

    // Adds word to finished array
    case 'correctResult':
      if (!word) {
        return { ...state }
      }
      return {
        ...state,
        unfinishedWords: currentUnfinishedWords,
        finishedWords: [...state.finishedWords, word]
      }
    // Returns word to unfinished array
    case 'incorrectResult':
      if (!word) {
        return { ...state }
      }
      return {
        ...state,
        unfinishedWords: [...currentUnfinishedWords, word]
      }
    default:
      throw new Error('Unknown action')
  }
}

const AppContext = createContext<AppContextTypes | null>(null)

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext)

  return (
    <AppContext.Provider
      value={{
        unfinishedWords: state.unfinishedWords,
        finishedWords: state.finishedWords,
        loading: state.loading,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export { ContextProvider, useAppContext }
