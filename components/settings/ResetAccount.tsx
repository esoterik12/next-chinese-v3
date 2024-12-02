'use client'
import React, { useState } from 'react'
import DefaultButton from '../buttons/DefaultButton'
import { resetLevel } from '@/lib/actions/words/resetLevel'
import { InputField } from '../forms/InputField'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

type ResetAccountProps = {
  userId: string
}

const ResetAccount = ({ userId }: ResetAccountProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [resetClicked, setResetClicked] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  async function onResetAccount() {
    if (resetClicked) {
      if (inputValue.toLowerCase() !== 'reset') {
        setError('Type "reset" to confirm.')
        return
      }

      setLoading(true)
      setError(null) // Clear previous errors

      try {
        if (userId) {
          const resetResult = await resetLevel({ userId })
          setResetClicked(false) // Exit confirmation mode
          setInputValue('') // Clear input

          if (resetResult.code === 200) {
            router.push('/')
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
      setResetClicked(true)
    }
  }

  return (
    <div className='w-full'>
      <h3 className='custom-large-text font-bold'>Reset Account</h3>
      <div className='w-full p-2'>
        <p className='text-gray-400'>
          Reset all your learning progress and start again at level 1. <span className='underline'>This
          action is not reversible</span>; all your statistics and progress will be
          permanently lost. You will be redirected to the homepage.
        </p>
        <div className='flex h-16 w-full flex-row items-end justify-end'>
          <AnimatePresence mode='wait'>
            {resetClicked && (
              <motion.div
                key='reset-confirmation'
                className='mr-4'
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
                  placeholder='Type "reset" and confirm.'
                  value={inputValue}
                  setValue={setInputValue}
                  error={error}
                />
              </motion.div>
            )}
          </AnimatePresence>{' '}
          <DefaultButton
            isDisabled={loading}
            handleClick={onResetAccount}
            customClasses='w-40 h-11 border-2 hover:border-rose-600 border-gray-600 p-2'
          >
            {!resetClicked ? <p>Reset Account</p> : <p>Confirm</p>}
          </DefaultButton>
        </div>
      </div>
    </div>
  )
}

export default ResetAccount
