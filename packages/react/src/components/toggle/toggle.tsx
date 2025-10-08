'use client'

import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle'
import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export const toggleVariants = cva(
	"inline-flex items-center justify-center gap-bff rounded-compact text-sm font-medium hover:bg-background-muted hover:text-foreground-muted disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-background-muted data-[pressed]:text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20  aria-invalid:border-destructive whitespace-nowrap",
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline:
					'border border-input bg-transparent shadow-xs hover:bg-background-muted hover:text-foreground',
			},
			size: {
				default: 'h-9 px-2 min-w-9',
				sm: 'h-8 px-1.5 min-w-8',
				lg: 'h-10 px-2.5 min-w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ToggleProps
	extends ComponentProps<typeof TogglePrimitive>,
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
