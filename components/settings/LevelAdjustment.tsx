'use client'
import React, { useState } from 'react'
import DefaultButton from '../buttons/DefaultButton'
import { resetLevel } from '@/lib/actions/words/resetLevel'
import { InputField } from '../forms/InputField'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { levelDetails } from '@/lib/constants/levelDetails'
import { setLevel } from '@/lib/actions/words/setLevel'

type LevelAdjustmentProps = {
  userId: string
}

const LevelAdjustment = ({ userId }: LevelAdjustmentProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [adjustClicked, setAdjustClicked] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const router = useRouter()

  const handleLevelClick = (level: number) => {
    setSelectedLevel(level)
  }

  async function onAdjustLevel() {
    if (adjustClicked) {
      if (inputValue.toLowerCase() !== 'change') {
        setError('Type "change" here.')
        return
      }

      setLoading(true)
      setError(null) // Clear previous errors

      try {
        if (userId) {
          const resetResult = await setLevel({
            userId: userId,
            selectedLevel: selectedLevel,
            userLatestWord: 0
          })
          console.log('resetting level')
          setAdjustClicked(false)
          setInputValue('')

          // TODO: Provide some feedback here possibly
          if (resetResult.code === 200) {
            router.push('/learn')
          }
        } else {
          throw new Error('Invalid user. Please try again.')
        }
      } catch (error) {
        setError('An error occurred. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      // Enter confirmation mode
      setAdjustClicked(true)
    }
  }

  return (
    <div className='w-full'>
      <h3 className='custom-large-text font-bold'>Level Adjustments</h3>
      <div className='w-full p-2'>
        <p className='text-gray-400'>
          This feature allows you to set your level higher than Level 1.{' '}
          <span className='underline'>This action is not reversible</span>.
          However, you can reset your account and then use this feature again.
        </p>
        <p className='mt-2 text-gray-400'>
          All words below your selected level will be spaced out over future
          learning sessions as words you already know for periodic review.
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
                  isDisabled={loading || item.level === 1}
                  handleClick={() => handleLevelClick(item.level)}
                  customClasses={`${selectedLevel === item.level && 'bg-gray-800'} w-full h-11 mt-3 bg-gray-900 hover:border-sky-600 border-gray-600 p-2`}
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
                  // label='Type "reset" & confrim.'
                  placeholder='Type "change"'
                  value={inputValue}
                  setValue={setInputValue}
                  error={error}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <DefaultButton
            isDisabled={loading}
            handleClick={onAdjustLevel}
            customClasses='w-40 h-11 border-2 hover:border-sky-600 border-gray-600 p-2'
          >
            {!adjustClicked ? <p>Adjust Level</p> : <p>Confirm</p>}
          </DefaultButton>
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
