'use client'
import React, { useEffect, useState } from 'react'
import { JoyrideSteps } from './JoyrideSteps'
import { CallBackProps, STATUS } from 'react-joyride'
import dynamic from 'next/dynamic'
import CustomTooltip from './CustomTooltip'
// Important: Next.js requires that this be imported without ssr
const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false })

/* 
Elements of this Test component so far:
1. TestDesignComp is primary parent component rendered in page
  -As of now this is using react-joyride and react-use for the tour elements
2. CustomTooltip component
*/

const JoyrideMain = () => {
  // Loads joyride state from JoyrideSteps, a separate tsx component with jsx for the modals
  const [joyRideState, setJoyrideState] = useState({
    run: false,
    steps: JoyrideSteps,
  });

  useEffect(() => {
    setJoyrideState((prevState) => ({
      ...prevState,
      run: true,
    }));
  }, []);

  // Currently unused - could be used for a "Take a tour" functionality in the future for second, third visits etc.
  // const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault()
  //   setJoyrideState((prevState) => ({
  //     ...prevState,
  //     run: true,
  //   }));
  // }

  // passed to JoyrideNoSSR component
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      setJoyrideState((prevState) => ({
        ...prevState,
        run: false,
      }));
    }
  }

  return (
    <JoyRideNoSSR
      // Using a CustomTooltip component defined in another file that uses Tailwind
      tooltipComponent={CustomTooltip}
      callback={handleJoyrideCallback}
      continuous
      run={joyRideState.run}
      scrollToFirstStep
      hideBackButton
      hideCloseButton
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

export default JoyrideMain
