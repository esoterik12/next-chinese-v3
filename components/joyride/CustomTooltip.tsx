import { TooltipRenderProps } from 'react-joyride'
import DefaultButton from '../buttons/DefaultButton'
import UnanimatedProgressBar from './UnanimatedProgBar'

export default function CustomTooltip(props: TooltipRenderProps) {
  const {
    // backProps, 
    // closeProps,
    continuous,
    index,
    primaryProps,
    skipProps,
    step,
    tooltipProps
  } = props

  return (
    <div
      className='flex min-h-[210px] w-[380px] flex-col justify-between rounded-lg border border-gray-500 custom-dark-background p-4'
      {...tooltipProps}
    >
      <div className='flex flex-col'>
        {/* Top Title */}
        <div className='flex flex-row justify-between'>
          {step.title && (
            <h4 className='custom-large-text font-semibold text-sky-500'>
              {step.title}
            </h4>
          )}
        </div>
        {/* Underline */}
        <div className='h-1 border-b border-gray-800'></div>
        {/* Content Container */}
        <div className='mt-1'>{step.content}</div>
      </div>

      <div>
        {/* Button Container */}
        <div>
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
        </div>
        <div className='mt-2'>
          <UnanimatedProgressBar goal={7} progress={index + 1} />
        </div>
      </div>
    </div>
  )
}
