'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import sm2 from '../sm2/sm2Algo'
import { ReviewResultDocument } from '@/types/review.types'
import { BaseSentenceProps } from '@/types/review.types'

// Unfinished: temporary any state until word types defined
interface AppContextTypes {
  unfinishedWords: ReviewResultDocument[]
  finishedWords: ReviewResultDocument[]
  progress: string
  loadingState: boolean
  userLatestWord: number
  error: null | string
  characterState: 'traditional' | 'simplified'
  startTime: number
  dispatch: React.Dispatch<ReducerAction>
}

// firstResult are the first 1-5 easeFactor outcome that the user inputs
// correct and incorrect are subsequent views, incorrect returns the word to the unfinished queue
interface ReducerAction {
  type:
    | 'setError'
    | 'loadWords'
    | 'addSentence'
    | 'firstResult'
    | 'correctResult'
    | 'incorrectResult'
    | 'resetState'
    | 'toggleCharacterState'
    | 'startLoading'
    | 'endLoading'
  firstResult?: number
  fetchedWords?: ReviewResultDocument[]
  newSentence?: BaseSentenceProps
  userLatestWord?: number
  error?: null | string
  characterState?: 'traditional' | 'simplified'
}

interface ReducerState {
  unfinishedWords: ReviewResultDocument[]
  finishedWords: ReviewResultDocument[]
  progress: string
  loadingState: boolean
  userLatestWord: number
  characterState: 'traditional' | 'simplified'
  startTime: number
  error: string | null
}

const initialContext: ReducerState = {
  unfinishedWords: [],
  finishedWords: [],
  progress: 'ready',
  loadingState: true,
  userLatestWord: 0,
  characterState: 'traditional',
  startTime: 0,
  error: null
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  // Get the current word - should always be at the start of the unfinished array
  const currentUnfinishedWords = [...state.unfinishedWords]
  const currentFinishedWords = [...state.finishedWords]
  const word = currentUnfinishedWords.shift() // Get the first word

  // Helper function to determine process state
  // This only needs to be triggered when action.type can end the session
  // That is: firstResult or correctResult
  const getProgressState = (
    unfinished: ReviewResultDocument[]
  ): 'ready' | 'running' | 'completed' => {
    if (unfinished.length === 0) {
      return 'completed'
    }
    // This means it will remain running if not
    return state.progress === 'running' ? 'running' : 'ready'
  }

  // Loads fetchedWords into the context
  switch (action.type) {
    case 'setError':
      return {
        ...state,
        error: action.error
      }
    case 'loadWords':
      // TODO: Add a function that takes lastCharacterSetting from the User collection
      // This will requires the setting to be updates on each round
      if (action.fetchedWords && action.fetchedWords.length > 0) {
        return {
          ...state,
          startTime: Date.now(),
          progress: 'running',
          loadingState: false,
          unfinishedWords: action.fetchedWords,
          finishedWords: []
        }
      } else {
        return {
          ...state,
          loadingState: false,
          error: 'Unexpected error loading words in your review session.'
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

      // Copy of the reviewHistory array to avoid mutation and add new current date
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

      console.log('n', n)
      console.log('ef', ef)
      console.log('i', i)

      // Calculate the next review date based on the updated interval
      const updatedNextReviewDate = new Date()
      updatedNextReviewDate.setDate(updatedNextReviewDate.getDate() + i)

      // Update word properties immutably
      const updatedWordWithStats = {
        ...word,
        reviewHistory: updatedReviewHistory, // Use the new reviewHistory array
        repetitions: n,
        easeFactor: ef,
        interval: i,
        nextReviewDate: updatedNextReviewDate,
        seenToday: true
      }

      // If result >= 3 then add the word to finishedWords
      if (action.firstResult >= 3) {
        return {
          ...state,
          unfinishedWords: currentUnfinishedWords,
          finishedWords: [...currentFinishedWords, updatedWordWithStats],
          progress: getProgressState(currentUnfinishedWords)
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
        finishedWords: [...state.finishedWords, word],
        progress: getProgressState(currentUnfinishedWords)
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
    case 'toggleCharacterState':
      return {
        ...state,
        characterState:
          state.characterState === 'simplified' ? 'traditional' : 'simplified'
      }
    case 'startLoading':
      return {
        ...state,
        loadingState: true
      }
    case 'endLoading':
      return {
        ...state,
        loadingState: false
      }
    case 'resetState':
      return {
        ...initialContext
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
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
        progress: state.progress,
        loadingState: state.loadingState,
        userLatestWord: state.userLatestWord,
        characterState: state.characterState,
        error: state.error,
        startTime: state.startTime,
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
