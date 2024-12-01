'use client'
import React from 'react'
import DefaultButton from '../buttons/DefaultButton'

const GeneralSettings = () => {
  return (
    <section>
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Account Details</h3>
        <div className='p-2'>
          <p>Username</p>

          <p>Email</p>

          <p>User since: </p>
        </div>
      </div>
      <div className='my-6 border border-gray-600' />
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Time Zone</h3>
        <div className='p-2'>
          {/* Make a drop down to select time zones */}
          <p className='text-gray-400'>
            Adjust your timezome preference. This will match your review
            schedule to your local timezone.
          </p>
        </div>
      </div>
      <div className='my-6 border border-gray-600' />
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Level Adjustments</h3>
        <div className='p-2'>
          <p>This setting allows you to set your level higher than Level 1.</p>
          <p>This change is not reversible.</p>
        </div>
      </div>
      <div className='my-6 border border-gray-600' />
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Reset Account</h3>
        <div className='w-full p-2'>
          <p className='text-gray-400'>
            Reset all your learning progress and start again at level 1. This
            action is not reversible; all your statistics and progress will be
            permanently lost.
          </p>
          <div className='mt-6 flex w-full flex-row justify-end'>
            <DefaultButton customClasses='w-40 border-2 hover:border-rose-600 border-gray-600 p-2'>
              <p>Reset Account</p>
            </DefaultButton>
          </div>
        </div>
      </div>
      <div className='my-6 border border-gray-600' />
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Delete Account</h3>
        <div className='w-full p-2'>
          <p className='text-gray-400'>
            Delete your account and all records of your account from the Next
            Chinese servers. This action is not reversible; all your statistics
            and progress will be permanently lost.
          </p>
          <div className='mt-6 flex w-full flex-row justify-end'>
            <DefaultButton customClasses='w-40 border-2 hover:border-rose-600 border-gray-600 p-2'>
              <p>Delete Account</p>
            </DefaultButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralSettings
