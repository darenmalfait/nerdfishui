'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Steps = React.forwardRef<
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
			<p className="text-foreground-muted text-xs font-medium">
				{stepLabel(currentStep, maxSteps)}
			</p>
			<div className="space-x-sm flex w-full rtl:space-x-reverse">
				{new Array(maxSteps).fill(0).map((_s, index) => {
					return index <= currentStep - 1 ? (
						<div
							key={`step-${index}`}
							onClick={() => navigateToStep?.(index)}
							className={cx(
								'bg-foreground h-1 w-full rounded-[1px]',
								index < currentStep - 1 ? 'cursor-pointer' : '',
							)}
							data-testid={`step-indicator-${index}`}
							onKeyUp={(e) => {
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
							className="bg-background-muted h-1 w-full rounded-[1px]"
							data-testid={`step-indicator-${index}`}
						/>
					)
				})}
			</div>
		</div>
	)
})

Steps.displayName = 'Steps'

export type StepsProps = React.ComponentPropsWithoutRef<typeof Steps>
