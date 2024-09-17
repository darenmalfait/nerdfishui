'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as React from 'react'

export const toggleVariants = cva(
	'hover:bg-inverted/10 focus-outline data-[state=on]:bg-muted text-primary group relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none  disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'hover:bg-muted shadow-outline bg-transparent',
			},
			size: {
				default: 'h-10 px-3',
				sm: 'h-9 px-2.5',
				lg: 'h-11 px-5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cx(toggleVariants({ variant, size, className }))}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export type ToggleProps = React.ComponentProps<typeof Toggle>