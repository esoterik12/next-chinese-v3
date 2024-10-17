import React from 'react'

interface StatsContainerProps {
  icon: React.ReactNode
  titleText: string
  valueText: string | number
}

const StatsContainer = ({
  titleText,
  icon,
  valueText
}: StatsContainerProps) => {
  return (
    <div className='flex w-[220px] flex-col rounded-xl border-2 border-gray-500 bg-gray-900 p-2'>
      <div className='flex flex-row gap-2'>
        {icon}
        <p className=''>{titleText}</p>
      </div>
      <div>
        <p className='custom-subheader md:custom-header text-center'>
          {valueText}
        </p>
      </div>
    </div>
  )
}

export default StatsContainer
