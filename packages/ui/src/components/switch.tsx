'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { inputVariants } from './input'

const switchVariants = cva(
	[inputVariants(), 'border-2 border-transparent bg-inverted/10'],
	{
		variants: {
			variant: {
				accent:
					'data-[state=checked]:bg-accent data-[state=checked]:border-accent',
				danger:
					'data-[state=checked]:bg-danger-accent data-[state=checked]:border-danger-accent',
				success:
					'data-[state=checked]:bg-success-accent data-[state=checked]:border-success-accent',
				warning:
					'data-[state=checked]:bg-warning-accent data-[state=checked]:border-warning-accent',
				info: 'data-[state=checked]:bg-info-accent data-[state=checked]:border-info-accent',
			},
		},
		defaultVariants: {
			variant: 'info',
		},
	},
)

export const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
		VariantProps<typeof switchVariants>
>(({ className, variant, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cx(
			switchVariants({ variant }),
			// basic styles
			'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full p-0 transition-colors',

			// disabled state
			'disabled-within:opacity-50 disabled-within:cursor-not-allowed disabled-within:shadow-none disabled-within:hover:border-transparent',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cx(
				'bg-primary dark:bg-inverted data-[state=checked]:bg-primary pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export type SwitchProps = React.ComponentPropsWithoutRef<typeof Switch>
