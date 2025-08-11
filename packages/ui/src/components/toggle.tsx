'use client'

import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle'
import { type VariantProps, cva, cx } from '@nerdfish/utils'

export const toggleVariants = cva(
	'focus-outline group relative inline-flex items-center justify-center rounded-lg font-medium text-foreground text-sm transition-colors hover:bg-foreground/10 disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-background-muted',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'bg-transparent shadow-outline hover:bg-background-muted',
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

export interface ToggleProps
	extends TogglePrimitive.Props,
		VariantProps<typeof toggleVariants> {}

export function Toggle({ className, variant, size, ...props }: ToggleProps) {
	return (
		<TogglePrimitive
			data-slot="toggle"
			className={cx(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
}
