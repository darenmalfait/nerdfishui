'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

const switchVariants = cva(
	['border-2 border-transparent bg-foreground/10 focus-visible:outline-active'],
	{
		variants: {
			variant: {
				brand:
					'data-[state=checked]:border-brand data-[state=checked]:bg-brand',
				danger:
					'data-[state=checked]:border-danger data-[state=checked]:bg-background-danger',
				success:
					'data-[state=checked]:border-success data-[state=checked]:bg-background-success',
				warning:
					'data-[state=checked]:border-warning data-[state=checked]:bg-background-warning',
				info: 'data-[state=checked]:border-info data-[state=checked]:bg-background-info',
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
			'disabled-within:cursor-not-allowed disabled-within:opacity-50 disabled-within:shadow-none disabled-within:hover:border-transparent',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			data-slot="thumb"
			className={cx(
				'bg-background data-[state=checked]:bg-background dark:bg-foreground pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0.5',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export type SwitchProps = React.ComponentPropsWithoutRef<typeof Switch>
