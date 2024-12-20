import React from 'react'

interface StatsContainerProps {
  icon: React.ReactNode
  titleText: string
  valueText: string | number
}

const StatsContainer = ({
  titleText,
  icon,
  valueText,
}: StatsContainerProps) => {
  return (
    <div className={`flex w-[330px] md:w-[190px] flex-row rounded-xl p-2 md:flex-col justify-between`}>
      <div className='flex flex-row gap-2'>
        {icon}
        <p className=''>{titleText}</p>
      </div>
      <div className='mx-2'>
        <p className='ml-2 md:ml-0 md:py-2 font-semibold md:custom-subheader md:custom-header text-center'>
          {valueText}
        </p>
      </div>
    </div>
  )
}

export default StatsContainer
