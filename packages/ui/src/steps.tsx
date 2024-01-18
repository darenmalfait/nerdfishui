import * as React from 'react'
import {cx} from '@nerdfish/utils'

const Steps = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    maxSteps: number
    currentStep: number
    navigateToStep?: (step: number) => void
    stepLabel?: (current: number, total: number) => string
  }
>(function Steps(
  {
    className,
    maxSteps,
    currentStep,
    navigateToStep,
    stepLabel = (current, total) => `Step ${current} of ${total}`,
    ...props
  },
  ref,
) {
  return (
    <div {...props} className={cx('space-y-2', className)} ref={ref}>
      <p className="text-secondary text-xs font-medium">
        {stepLabel(currentStep, maxSteps)}
      </p>
      <div className="flex w-full space-x-2 rtl:space-x-reverse">
        {new Array(maxSteps).fill(0).map((_s, index) => {
          return index <= currentStep - 1 ? (
            <div
              key={`step-${index}`}
              onClick={() => navigateToStep?.(index)}
              className={cx(
                'bg-inverse h-1 w-full rounded-[1px]',
                index < currentStep - 1 ? 'cursor-pointer' : '',
              )}
              data-testid={`step-indicator-${index}`}
              onKeyUp={e => {
                if (e.key === 'Enter') {
                  navigateToStep?.(index)
                }

                if (e.key === ' ') {
                  e.preventDefault()
                }
              }}
            />
          ) : (
            <div
              key={`step-${index}`}
              className="bg-secondary h-1 w-full rounded-[1px] opacity-25"
              data-testid={`step-indicator-${index}`}
            />
          )
        })}
      </div>
    </div>
  )
})

Steps.displayName = 'Steps'

export {Steps}
