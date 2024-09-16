'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertCircle } from 'lucide-react'
import * as React from 'react'

export const inputVariants = cva(
	cx(
		'text-md text-primary bg-muted focus-outline group relative block w-full rounded-lg text-left font-bold outline-none',
		// placeholder
		'placeholder:text-muted',
		// disabled
		'disabled-within:opacity-50 before:has-[[data-disabled]]:shadow-none',
	),
	{
		variants: {
			inputSize: {
				sm: 'p-2 text-sm',
				md: 'px-4 py-3 text-base',
				lg: 'px-8 py-5 text-lg',
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

export const inputAddonVariants: typeof inputVariants = cva(
	'bg-popover inline-flex w-auto font-normal shadow-none',
	{
		variants: {
			inputSize: {
				sm: 'm-1 px-3 py-0 text-xs',
				md: 'm-1 px-3 py-1 text-base',
				lg: 'mx-2 my-1 p-3 text-lg',
			},
			variant: {
				error: 'text-danger',
				success: 'text-success',
				default: 'text-primary',
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

function Addon({
	className,
	inputSize,
	variant,
	addOnLeading,
	addOnTrailing,
}: InputVariants &
	Pick<InputProps, 'className' | 'addOnLeading' | 'addOnTrailing'>) {
	if (!addOnLeading && !addOnTrailing) return null

	return (
		<div
			className={cx(
				inputAddonVariants({ inputSize, variant }),
				{
					'rounded-l-lg': !!addOnLeading,
					'rounded-r-lg': !!addOnTrailing,
				},
				className,
			)}
		>
			<div className="flex flex-col justify-center leading-7">
				<span className="flex whitespace-nowrap">
					{addOnLeading ?? addOnTrailing}
				</span>
			</div>
		</div>
	)
}

function InputIcon({
	icon: Icon,
	variant,
}: {
	icon?: React.ElementType
	variant: InputVariant
}) {
	if (variant === 'error') Icon = AlertCircle
	if (!Icon) return null

	return (
		<Icon
			width="20px"
			height="20px"
			className={cx(
				'absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0',
				variant === 'error' && 'text-danger',
			)}
		/>
	)
}

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
					className,
					'relative m-0 flex w-full items-center p-0 shadow-sm',
				)}
			>
				<Addon addOnLeading={addOnLeading} inputSize={inputSize} />
				<input
					data-slot="control"
					type={type}
					{...(inputProps as React.ComponentPropsWithoutRef<'input'>)}
					className={cx(
						baseClassName,
						!!addOnLeading && '!pl-2',
						!!Icon && 'pr-14',
					)}
					ref={ref as React.ForwardedRef<HTMLInputElement>}
				/>
				<InputIcon icon={Icon} variant={variant} />
				<Addon addOnTrailing={addOnTrailing} inputSize={inputSize} />
			</div>
			{children ? <div className="flex shrink-0">{children}</div> : null}
		</div>
	)
})
