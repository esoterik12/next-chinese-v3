'use client'
import DefaultButton from '../buttons/DefaultButton'
import LevelAdjustment from './LevelAdjustment'
import ResetAccount from './ResetAccount'

type GeneralSettingsProps = {
  userId: string
  userEmail: string
  userName: string
  userSince: Date
}

const GeneralSettings = ({
  userId,
  userEmail,
  userName,
  userSince
}: GeneralSettingsProps) => {
  return (
    <section>
      <div className='w-full'>
        <h3 className='custom-large-text font-bold'>Account Details</h3>
        <div className='p-2'>
          <p className='text-gray-400'>
            Name: <span className='text-white'>{userName}</span>
          </p>
          <p className='text-gray-400'>
            Email: <span className='text-white'>{userEmail}</span>
          </p>{' '}
          <p className='text-gray-400'>
            User since: <span className='text-white'>{userSince.toDateString()}</span>
          </p>
        </div>
      </div>
      <div className='my-6 border border-gray-600' />
      <LevelAdjustment userId={userId} />
      <div className='my-6 border border-gray-600' />
      <ResetAccount userId={userId} />
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
            <DefaultButton customClasses='w-40 h-11 border-2 hover:border-rose-600 border-gray-600 p-2'>
              <p>Delete Account</p>
            </DefaultButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralSettings
