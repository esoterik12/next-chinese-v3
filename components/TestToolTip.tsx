'use client'
import React, { useEffect, useState } from 'react'
import { JoyrideSteps } from './joyride/JoyrideSteps'
import { CallBackProps, STATUS } from 'react-joyride'
import dynamic from 'next/dynamic'
import IconXCircle from './icons/IconXCircle'
import { TooltipRenderProps } from 'react-joyride'
import DefaultButton from './buttons/DefaultButton'

// Important: Next.js requires that this be imported without ssr
const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false })

/* 
Elements of this Test component so far:
1. TestDesignComp is primary parent component rendered in page
  -As of now this is using react-joyride and react-use for the tour elements
2. CustomTooltip component
*/

const JoyrideTest = () => {
  // Loads joyride state from JoyrideSteps, a separate tsx component with jsx for the modals
  const [joyRideState, setJoyrideState] = useState({
    run: false,
    steps: JoyrideSteps
  })

  useEffect(() => {
    setJoyrideState(prevState => ({
      ...prevState,
      run: true
    }))
  }, [])

  // Currently unused - could be used for a "Take a tour" functionality in the future for second, third visits etc.
  // const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault()
  //   setJoyrideState(prevState => ({
  //     ...prevState,
  //     run: true
  //   }))
  // }

  // passed to JoyrideNoSSR component
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      setJoyrideState(prevState => ({
        ...prevState,
        run: false
      }))
    }
  }

  return (
    <JoyRideNoSSR
      // Using a CustomTooltip component defined in another file that uses Tailwind
      tooltipComponent={TestToolTip}
      callback={handleJoyrideCallback}
      continuous
      run={joyRideState.run}
      scrollToFirstStep
      hideCloseButton
      hideBackButton
      showProgress
      showSkipButton
      steps={joyRideState.steps}
      styles={{
        options: {
          zIndex: 10000
        }
      }}
    />
  )
}

export default JoyrideTest

const TestToolTip = ({
  // backProps, // Unused back button
  closeProps,
  continuous,
  index,
  primaryProps,
  skipProps,
  step,
  tooltipProps
}: TooltipRenderProps) => {
  const percentComplete = Math.floor((index + 1 / 7) * 100)
  
  return (
    <div
      // EDIT: Container styles here
      className='flex min-h-[210px] w-[380px] flex-col justify-between rounded-lg border border-gray-500 custom-dark-background p-4'
      {...tooltipProps}
    >
      {/* EDIT: added this top section container */}
      <div className=''>
        {/* Top Title / X Container */}
        <div className='flex flex-row justify-between'>
          {step.title && (
            <h4 className='custom-large-text font-semibold text-sky-500'>
              {step.title}
            </h4>
          )}

          <button className='flex flex-row justify-end' {...closeProps}>
            <IconXCircle classes='h-6 w-6 hover:text-gray-500' />
          </button>
        </div>

        {/* EDIT: Added dividing line */}
        <div className='h-1 border-b border-gray-500'></div>

        {/* Content Container */}
        <div className='mt-3'>{step.content}</div>
      </div>

      {/* Bottom Container */}
      <div className=''>
        {/*  Container: Back / Next buttons */}
        <div className='mt-4 flex flex-row justify-between gap-2'>
          {/* Skip Button */}
          <DefaultButton
            customClasses='w-[80px] border-sky-500 p-2 text-gray-500'
            handleClick={skipProps.onClick}
            aria-label={skipProps['aria-label']}
            data-action={skipProps['data-action']}
            role={skipProps.role}
          >
            <p className=''>Skip</p>
          </DefaultButton>

          {continuous && (
            <DefaultButton
              handleClick={primaryProps.onClick}
              aria-label={primaryProps['aria-label']}
              data-action={primaryProps['data-action']}
              role={primaryProps.role}
              customClasses='w-[80px] border-sky-500 custom-background p-2'
            >
              <p>Next</p>
            </DefaultButton>
          )}
        </div>
        <div className='mt-2'>
          <div className='flex w-full flex-row'>
            <div
              style={{
                width: `${percentComplete}%`,
                transition: 'width 0.5s ease-in-out'
              }}
              className='h-[2px] bg-sky-500'
            />
            <div
              style={{
                width: `${100 - percentComplete}%`,
                transition: 'width 0.5s ease-in-out'
              }}
              className='h-[2px] custom-background'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
