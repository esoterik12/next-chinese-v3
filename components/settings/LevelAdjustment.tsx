'use client'
import React, { useReducer, useState } from 'react'
import DefaultButton from '../buttons/DefaultButton'
import { InputField } from '../forms/InputField'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { levelDetails } from '@/lib/constants/levelDetails'
import { setLevel } from '@/lib/actions/words/setLevel'
import { startLevelWordNumber } from '@/lib/constants/startLevelWordNumber'
import calcLevel from '@/lib/utils/calcLevel'
import {
  adjustLevelReducer,
  initialAdjustLevelState
} from '@/lib/state/adjustLevelReducer'

type LevelAdjustmentProps = {
  userId: string
  userLatestWord: number
}

const LevelAdjustment = ({ userId, userLatestWord }: LevelAdjustmentProps) => {
  const [state, dispatch] = useReducer(
    adjustLevelReducer,
    initialAdjustLevelState
  )
  const { loading, selectedLevel, error, adjustClicked } = state
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  const handleLevelClick = (level: number) => {
    dispatch({ type: 'SET_SELECTED_LEVEL', payload: level })
  }

  async function onAdjustLevel() {
    if (adjustClicked) {
      if (inputValue.toLowerCase() !== 'change') {
        dispatch({ type: 'SET_ERROR', payload: 'Type "change" here.' })
        return
      }

      dispatch({ type: 'SET_LOADING', payload: true })
      dispatch({ type: 'SET_ERROR', payload: null })

      try {
        if (userId) {
          const resetResult = await setLevel({
            userId: userId,
            selectedLevel: selectedLevel,
            userLatestWord: userLatestWord
          })
          if (resetResult.code === 400) {
            setInputValue('')
            dispatch({
              type: 'SET_ERROR',
              payload:
                'Invalid request; you are already at this level or above.'
            })
            return
          }
          dispatch({ type: 'TOGGLE_ADJUST_CLICKED' })
          setInputValue('')

          // TODO: Provide some feedback here possibly
          if (resetResult.code === 200) {
            router.push('/learn')
          }
        } else {
          throw new Error('Invalid user. Please try again.')
        }
      } catch (error) {
        dispatch({
          type: 'SET_ERROR',
          payload: 'An error occurred. Please try again.'
        })
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    } else {
      // Enter confirmation mode
      dispatch({ type: 'TOGGLE_ADJUST_CLICKED' })
    }
  }

  return (
    <div className='w-full'>
      <h3 className='custom-large-text font-bold'>Level Adjustments</h3>
      <div className='w-full p-2'>
        <p className='text-gray-400'>
          This feature allows you to set your level higher than your current
          level.{' '}
          <span className='underline'>This action is not reversible</span>.
          However, you can reset your account and then use this feature again.
        </p>
        <p className='mt-2 text-gray-400'>
          All words below your selected level will be spaced out over future
          learning sessions as words you already know for periodic review.
        </p>
        <p className='mt-2'>
          Your current level is:{' '}
          <span className='font-semibold text-sky-500'>
            {/* +1 is added so the current level displayed is what the user's next word will be, not current */}
            {calcLevel(userLatestWord + 1)}
          </span>
        </p>
        <p className='mt-2 text-gray-400'>
          This change may take 10 to 20 seconds.
        </p>
        <div className='mt-6'>
          {/* Selector:  */}
          <div className='mt-6'>
            {/* Table Header */}
            <div className='grid grid-cols-5 border-b border-gray-400'>
              <div className='font-bold'></div>
              <p className='flex flex-row font-bold'>
                <span className='hidden md:block'>Proficiency&nbsp;</span> Band
              </p>
              <p className='font-bold'>Words</p>
              <p className='flex flex-row font-bold'>
                CEFR&nbsp;<span className='hidden md:block'>Equivalent</span>
                <span className='ml-1 text-gray-400'>*</span>
              </p>
              <p className='flex flex-row font-bold'>
                HSK&nbsp;<span className='hidden md:block'>Equivalent</span>
                <span className='ml-1 text-gray-400'>**</span>
              </p>
            </div>
            <div className='mt-2 border-gray-400'>
              {levelDetails.map(item => (
                <DefaultButton
                  key={item.level}
                  isDisabled={
                    loading ||
                    item.level === 1 ||
                    // +1 is added to stop users setting their current level again
                    userLatestWord + 1 >= startLevelWordNumber[item.level] // prevents setting level below your current
                  }
                  handleClick={() => handleLevelClick(item.level)}
                  customClasses={`${selectedLevel === item.level && 'custom-light-background'} w-full h-11 mt-3 custom-background hover:border-sky-600 border-gray-600 p-2`}
                >
                  <div
                    className={`grid grid-cols-5 ${selectedLevel === item.level && 'text-sky-500'}`}
                  >
                    <p className='flex flex-row'>
                      <span className='hidden md:block'>Level&nbsp;</span>{' '}
                      {item.level}
                      {item.level === 1 && (
                        <span className='ml-1 text-gray-400'>†</span>
                      )}
                    </p>
                    <p className='text-left'>{item.band}</p>
                    <p className='text-left'>{item.words}</p>
                    <p className='text-left'>{item.cefrEquivalent}</p>
                    <p className='text-left'>{item.hskEquivalent}</p>
                  </div>
                </DefaultButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-6 flex h-20 w-full flex-row items-end justify-end'>
          <AnimatePresence mode='wait'>
            {adjustClicked && (
              <motion.div
                key='reset-confirmation'
                className='mr-4 flex flex-row'
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3, ease: [0.25, 0.25, 0.75, 1] }}
              >
                <InputField
                  id='reset-account-confrimation'
                  type='text'
                  inputClasses='h-11 w-52'
                  placeholder='Type "change"'
                  value={inputValue}
                  setValue={setInputValue}
                  error={error}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <DefaultButton
            isDisabled={loading || selectedLevel === null}
            handleClick={onAdjustLevel}
            customClasses='w-40 h-11 border-2 hover:border-sky-600 border-gray-600 p-2'
          >
            <>
              {loading && <p>Loading...</p>}
              {!adjustClicked && !loading && <p>Adjust Level</p>}
              {adjustClicked && !loading && <p>Confirm</p>}
            </>
          </DefaultButton>
        </div>
        <div>
          {loading && (
            <motion.div
              key='reset-confirmation'
              className='mr-4 flex flex-row'
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0.75, 1] }}
            ></motion.div>
          )}
        </div>
        {/* Notes: */}
        <div className='custom-small-text mt-6 flex flex-col gap-y-1 text-gray-400 md:mt-10'>
          <p>
            * This is the state equivalent according to the Test of Chinese as a
            Foreign Language.
          </p>
          <p>
            ** This is a general equivalent according to the The European
            Association of Chinese Teaching.
          </p>
          <p>† Reset your account to begin at level 1.</p>
        </div>
      </div>
    </div>
  )
}

export default LevelAdjustment
