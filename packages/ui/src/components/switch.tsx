'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

const switchVariants = cva(
	['focus-visible:outline-active border-2 border-transparent bg-inverted/10'],
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
			inputSize: {
				sm: 'h-[16px] w-[32px] [&>[data-slot=thumb]]:size-4 [&>[data-slot=thumb]]:data-[state=checked]:translate-x-3',
				md: 'h-[24px] w-[44px] [&>[data-slot=thumb]]:size-5 [&>[data-slot=thumb]]:data-[state=checked]:translate-x-5',
				lg: 'h-[32px] w-[56px] [&>[data-slot=thumb]]:size-6 [&>[data-slot=thumb]]:data-[state=checked]:translate-x-7',
				xl: 'h-[40px] w-[72px] [&>[data-slot=thumb]]:size-8 [&>[data-slot=thumb]]:data-[state=checked]:translate-x-9',
			},
		},
		defaultVariants: {
			variant: 'info',
			inputSize: 'md',
		},
	},
)

export const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
		VariantProps<typeof switchVariants>
>(({ className, variant, inputSize, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cx(
			switchVariants({ variant, inputSize }),
			// basic styles
			'peer inline-flex shrink-0 cursor-pointer items-center rounded-full p-0 transition-colors',

			// disabled state
			'disabled-within:opacity-50 disabled-within:cursor-not-allowed disabled-within:shadow-none disabled-within:hover:border-transparent',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			data-slot="thumb"
			className={cx(
				'bg-primary dark:bg-inverted data-[state=checked]:bg-primary pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0.5',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export type SwitchProps = React.ComponentPropsWithoutRef<typeof Switch>
