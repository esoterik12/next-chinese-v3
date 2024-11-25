import Image from 'next/image'
import React from 'react'

type HomepageCardProps = {
  image: string
  subtitle: string
  text: string
}

const HomepageCard = ({ image, subtitle, text }: HomepageCardProps) => {
  return (
    <div className='mt-6 flex h-[190px] max-w-[320px] flex-col rounded-xl border border-gray-800 p-4 md:flex-col'>
      {/* Top Section Icon Design */}
      <div
        style={{
          borderImage: 'linear-gradient(to top, #9ca3af, black) 1'
        }}
        className='mb-1 ml-8 h-2 w-1 border-r border-gray-600'
      />
      <div className='flex flex-row items-center'>
        <div
          style={{
            borderImage: 'linear-gradient(to left, #9ca3af, black) 1'
          }}
          className='mb-1 mr-1 h-1 w-2 border-b border-gray-600'
        />
        <div className='flex h-12 w-12 flex-col items-center justify-center rounded-full border border-gray-400 bg-[radial-gradient(circle,_#0369a1,_#01030d)]'>
          <div className='flex h-10 w-10 flex-col items-center justify-center rounded-full border border-gray-400 bg-[radial-gradient(circle,_#0369a1,_#01030d)]'>
            <Image src={image} alt='love' height={18} width={18} />
          </div>
        </div>
        {/* Right Long Line */}
        <div
          className='mb-1 ml-1 h-1 w-[220px] border-b-[1px]'
          style={{
            borderImage: 'linear-gradient(to right, #9ca3af, black) 1'
          }}
        ></div>
      </div>

      {/* Main/Bottom Section Text */}
      <div className='ml-3 mt-4'>
        <p className='font-bold'>{subtitle}</p>
        <p className='mt-2 font-light text-gray-400'>{text}</p>
      </div>
    </div>
  )
}

export default HomepageCard
