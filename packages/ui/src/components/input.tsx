'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import { AlertCircle } from 'lucide-react'
import * as React from 'react'

export const inputVariants = cva(
	cx(
		'focus-outline rounded-base bg-background-muted p-md text-md text-foreground group relative block w-full border border-transparent text-left font-bold outline-none',
		// placeholder
		'placeholder:text-foreground-muted',
		// disabled
		'disabled-within:opacity-50 before:has-[[data-disabled]]:shadow-none',
	),
	{
		variants: {
			inputSize: {
				sm: 'text-xs',
				md: 'text-base',
				lg: 'text-lg',
			},
			variant: {
				error:
					'animate-shake border-danger bg-background-danger-muted text-foreground-danger',
				success:
					'border-success bg-background-success-muted text-foreground-success',
				default: 'border border-transparent',
				bordered: 'border border-muted',
			},
		},
		defaultVariants: {
			inputSize: 'md',
			variant: 'default',
		},
	},
)

export type InputSize = VariantProps<typeof inputVariants>['inputSize']
export type InputVariant = VariantProps<typeof inputVariants>['variant']
export type InputVariants = VariantProps<typeof inputVariants>

export interface InputAddOns extends InputVariants {
	icon?: React.ElementType
	addOnLeading?: React.ReactNode
	addOnTrailing?: React.ReactNode
	action?: () => void
}
export interface InputProps
	extends React.ComponentPropsWithRef<'input'>,
		InputAddOns {}

export const InputIcon = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'> & {
		icon?: React.ElementType
		variant: InputVariant
	}
>(function InputIcon({ icon: Icon, variant }, ref) {
	if (variant === 'error') Icon = AlertCircle
	if (!Icon) return null

	return (
		<Icon
			ref={ref}
			width="20px"
			height="20px"
			className={cx(
				'right-md absolute top-0 z-10 flex h-full items-center justify-center p-0',
				variant === 'error' && 'text-foreground-danger',
			)}
		/>
	)
})

export type InputIconProps = React.ComponentPropsWithoutRef<typeof InputIcon>

export const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps
>(function Input(
	{
		type,
		className,
		inputSize,
		variant,
		icon: Icon,
		children,
		addOnLeading,
		addOnTrailing,
		...inputProps
	},
	ref,
) {
	const baseClassName = inputVariants({ inputSize, variant })

	return (
		<div
			className={cx(
				baseClassName,
				'relative m-0 flex w-full items-center !p-0 shadow-sm',
				className,
			)}
		>
			{addOnLeading}
			<input
				data-slot="control"
				type={type}
				{...(inputProps as React.ComponentPropsWithoutRef<'input'>)}
				className={cx(
					baseClassName,
					'border-transparent bg-transparent',
					!!addOnLeading && '!pl-sm',
					!!Icon && 'pr-xl',
				)}
				ref={ref as React.ForwardedRef<HTMLInputElement>}
			/>
			<InputIcon icon={Icon} variant={variant} />
			{children ? <div className="flex shrink-0">{children}</div> : null}
			{addOnTrailing}
		</div>
	)
})
