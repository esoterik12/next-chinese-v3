'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import sm2 from '../sm2/sm2Algo'
import { ReviewResultDocument } from '@/types/review.types'
import { SentenceProps } from '@/components/cards/SentenceCard'

// Unfinished: temporary any state until word types defined
interface AppContextTypes {
  unfinishedWords: ReviewResultDocument[]
  finishedWords: ReviewResultDocument[]
  loadingState: boolean
  userLatestWord: number
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
    | 'resetState'
  firstResult?: number
  fetchedWords?: ReviewResultDocument[]
  newSentence?: SentenceProps
  userLatestWord?: number
}

interface ReducerState {
  unfinishedWords: ReviewResultDocument[]
  finishedWords: ReviewResultDocument[]
  loadingState: boolean
  userLatestWord: number
  error: string | null
}

const initialContext = {
  unfinishedWords: [],
  finishedWords: [],
  loadingState: true,
  userLatestWord: 0,
  error: null
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  // Get the current word - should always be at the start of the unfinished array
  const currentUnfinishedWords = [...state.unfinishedWords]
  const currentFinishedWords = [...state.finishedWords]
  const word = currentUnfinishedWords.shift() // Get the first word

  // Loads fetchedWords into the context
  switch (action.type) {
    case 'loadWords':
      if (action.fetchedWords) {
        return {
          ...state,
          loadingState: false,
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
      const updatedWordWithSent = {
        ...word,
        newSentencesArray: [...word.newSentencesArray, action.newSentence]
      }
      // Keeps the active word at the front of the array
      return {
        ...state,
        unfinishedWords: [updatedWordWithSent, ...currentUnfinishedWords]
      }
    case 'firstResult':
      // Return state if no payload or no word
      if (!action.firstResult || !word) {
        return { ...state }
      }

      // First, create a copy of the word and reviewHistory array to avoid mutation
      const updatedReviewHistory = [
        ...word.reviewHistory,
        {
          date: new Date(),
          quality: action.firstResult
        }
      ]

      // Compute new sm2 values based on result and previous values
      const { n, ef, i } = sm2(
        action.firstResult,
        word.repetitions,
        word.easeFactor,
        word.interval
      )

      // Update word properties immutably
      const updatedWordWithStats = {
        ...word,
        reviewHistory: updatedReviewHistory, // Use the new reviewHistory array
        repetitions: n,
        easeFactor: ef,
        interval: i,
        seenToday: true
      }

      // If result >= 3 then add the word to finishedWords
      if (action.firstResult >= 3) {
        return {
          ...state,
          unfinishedWords: currentUnfinishedWords,
          finishedWords: [...currentFinishedWords, updatedWordWithStats]
        }
      } else {
        // Otherwise return it to the unfinished words to be seen once more until correct
        return {
          ...state,
          unfinishedWords: [...currentUnfinishedWords, updatedWordWithStats]
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
    case 'resetState':
      return {
        ...initialContext
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
        loadingState: state.loadingState,
        userLatestWord: state.userLatestWord,
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
