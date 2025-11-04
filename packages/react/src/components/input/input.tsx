import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as React from 'react'

export const inputVariants = cva(
	cx(
		'rounded-base bg-background-muted text-md text-foreground group relative block w-full border border-transparent px-[1.5em] py-[0.5em] text-left font-bold outline-none',
		//focus
		'focus-visible:ring-ring focus-visible:border-border focus-visible:ring-[3px]',
		// placeholder
		'placeholder:text-foreground-muted',
		// disabled
		'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
		// selection
		'selection:bg-background-inverted selection:text-foreground-inverted',
		// file
		'file:text-foreground file:text-md file:mr-friends file:inline-flex file:h-full file:items-center file:border-0 file:bg-transparent file:font-medium',
		// invalid
		'aria-invalid:border-destructive aria-invalid:ring-destructive/40',
	),
	{
		variants: {
			size: {
				xs: 'text-[0.625rem] h-8',
				sm: 'text-xs h-10',
				md: 'text-sm h-12',
				lg: 'text-lg h-14',
				xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)] h-16',
			},
			variant: {
				default:
					'focus-visible:ring-ring border border-transparent focus-visible:border-border',
				bordered:
					'border border-border focus-visible:border-border focus-visible:ring-ring',
			},
		},
		defaultVariants: {
			size: 'md',
			variant: 'default',
		},
	},
)

export type InputSize = VariantProps<typeof inputVariants>['size']
export type InputVariant = VariantProps<typeof inputVariants>['variant']
export type InputVariants = VariantProps<typeof inputVariants>

export interface InputProps
	extends Omit<React.ComponentProps<'input'>, 'size'>,
		InputVariants {}

export function Input({
	className,
	type,
	size,
	variant,
	...props
}: InputProps) {
	return (
		<input
			type={type}
			data-slot="input"
			{...props}
			className={cx(inputVariants({ size, variant }), className)}
		/>
	)
}
