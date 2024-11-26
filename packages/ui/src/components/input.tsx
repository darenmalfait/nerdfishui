'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertCircle } from 'lucide-react'
import * as React from 'react'

export const inputVariants = cva(
	cx(
		'text-md text-primary p-md focus-outline bg-muted border-muted rounded-container group relative block w-full border text-left font-bold outline-none',
		// placeholder
		'placeholder:text-muted',
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
				error: 'animate-shake border-danger bg-danger-muted/50 text-danger',
				success: 'border-success bg-success-muted/50 text-success',
				default: 'border border-transparent',
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

export type InputProps = {
	icon?: React.ElementType
	addOnLeading?: React.ReactNode
	addOnTrailing?: React.ReactNode
	action?: () => void
} & InputVariants &
	React.ComponentPropsWithRef<'input'>

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
				variant === 'error' && 'text-danger',
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
		<div className="flex flex-nowrap items-center space-x-2">
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
		</div>
	)
})
