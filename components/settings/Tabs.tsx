'use client'
import React, { useState } from 'react'
import StatsContainer from '../containers/StatsContainer'
import IconAcademic from '../icons/IconAcademic'
import GeneralSettings from './GeneralSettings'

type TabsProbs = {
  userId: string
  userEmail: string
  userName: string
  userSince: Date
  userLatestWord: number
}

const SettingsTabs = ({
  userId,
  userEmail,
  userName,
  userSince,
  userLatestWord
}: TabsProbs) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['General Settings'] // Add 'Subscription' here when ready
  const tabContent = [
    <GeneralSettings
      userId={userId}
      userEmail={userEmail}
      userName={userName}
      userSince={userSince}
      userLatestWord={userLatestWord}
      key='general-settings'
    />,
    <StatsContainer
      key='stats-container'
      icon={<IconAcademic classes='h-6 w-6' />}
      titleText='SS'
      valueText='22'
    />
  ]

  return (
    <div className='mt-4 w-full'>
      {/* Tabs Navigation */}
      <div className='relative flex w-full border-b-2 border-gray-600'>
        {tabs.map((tab, index) => (
          <button
            key={`${tab}-${index}`}
            className={`relative w-[180px] border-b-2 py-2 text-center font-semibold ${
              activeTab === index
                ? '-mb-[2px] border-blue-500' // Bring the button border above
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className='mt-4 p-4'>{tabContent[activeTab]}</div>
    </div>
  )
}

export default SettingsTabs
