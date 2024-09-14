'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertCircle } from 'lucide-react'
import * as React from 'react'

import { Field } from './field'

export const inputVariants = cva(
	cx(
		'placeholder:text-muted w-full rounded-lg bg-transparent text-left outline-none',
	),
	{
		variants: {
			size: {
				sm: 'p-2 text-sm',
				md: 'px-4 py-3 text-base',
				lg: 'px-8 py-5 text-lg',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

export const inputAddonVariants = cva(
	'bg-popover inline-flex w-auto font-normal shadow-none',
	{
		variants: {
			size: {
				sm: 'm-1 px-3 py-0 text-xs',
				md: 'm-1 px-3 py-1 text-base',
				lg: 'mx-2 my-1 p-3 text-lg',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

export type InputSize = VariantProps<typeof inputVariants>['size']

export type InputRootProps = {
	hasError?: boolean
	icon?: React.ElementType
	inputSize?: InputSize
	addOnLeading?: React.ReactNode
	addOnTrailing?: React.ReactNode
	action?: () => void
} & (
	| ({ type: 'textarea' } & React.ComponentPropsWithRef<'textarea'>)
	| React.ComponentPropsWithRef<'input'>
)

export type InputProps = {
	defaultValue?: string | null
	name: string
	label?: string
	className?: string
	error?: string | null
	description?: React.ReactNode
}

export function getInputClassName(
	className?: string,
	hasError?: boolean,
	inputSize: InputSize = 'md',
	isInputField: boolean = true,
) {
	return cx(
		// Variants
		isInputField && inputVariants({ size: inputSize }),
		// Basic layout
		'text-md text-primary bg-muted focus-outline group relative block w-full rounded-lg text-left font-bold',
		// Border
		'border border-transparent',
		// Disabled state
		'disabled-within:opacity-50 before:has-[[data-disabled]]:shadow-none',
		// Invalid state
		hasError && 'animate-shake border-danger bg-danger-muted/50 text-danger',
		// Custom
		className,
	)
}

export function FormHelperText({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return <div className={cx('text-muted text-sm', className)} {...props} />
}

function Addon({
	className,
	inputSize,
	addOnLeading,
	addOnTrailing,
}: {
	addOnLeading?: React.ReactNode
	addOnTrailing?: React.ReactNode
	className?: string
	inputSize?: InputSize
}) {
	if (!addOnLeading && !addOnTrailing) return null

	return (
		<div
			className={cx(
				inputAddonVariants({ size: inputSize }),
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
	hasError,
}: {
	icon?: React.ElementType
	hasError?: boolean
}) {
	if (hasError) Icon = AlertCircle
	if (!Icon) return null

	return (
		<Icon
			width="20px"
			height="20px"
			className={cx(
				'absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0',
				hasError && 'text-danger',
			)}
		/>
	)
}

export const InputRoot = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputRootProps
>(function InputRoot(props, ref) {
	const {
		type,
		hasError,
		addOnLeading,
		addOnTrailing,
		children,
		inputSize,
		icon: Icon,
		...inputRootProps
	} = props

	const className = getInputClassName(
		props.className,
		hasError,
		inputSize,
		false,
	)

	if (type === 'textarea') {
		return (
			<div
				className={cx(className, 'relative flex w-full items-center space-x-2')}
			>
				<InputIcon icon={Icon} hasError={hasError} />
				<textarea
					data-slot="control"
					{...(inputRootProps as React.ComponentPropsWithoutRef<'textarea'>)}
					ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
					aria-invalid={hasError}
					className={cx('h-36', inputVariants({ size: inputSize }), {
						'pr-14': !!Icon,
					})}
				/>
				{children ? <div className="flex shrink-0">{children}</div> : null}
			</div>
		)
	}

	return (
		<div className="flex flex-nowrap items-center space-x-2">
			<div
				className={cx(className, 'relative flex w-full items-center shadow-sm')}
			>
				<Addon addOnLeading={addOnLeading} inputSize={inputSize} />
				<input
					data-slot="control"
					type={type}
					{...(inputRootProps as React.ComponentPropsWithoutRef<'input'>)}
					className={cx(
						!!addOnLeading && '!pl-2',
						!!Icon && 'pr-14',
						inputVariants({ size: inputSize }),
					)}
					ref={ref as React.ForwardedRef<HTMLInputElement>}
				/>
				<InputIcon icon={Icon} hasError={hasError} />
				<Addon addOnTrailing={addOnTrailing} inputSize={inputSize} />
			</div>
			{children ? <div className="flex shrink-0">{children}</div> : null}
		</div>
	)
})

export const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps & InputRootProps
>(function Input(
	{ defaultValue, error, name, label, description, id, ...props },
	ref,
) {
	const inputId = id ?? name
	const errorId = `${inputId}-error`
	const descriptionId = `${inputId}-description`

	return (
		<Field
			{...{
				description,
				descriptionId,
				error,
				errorId,
				htmlFor: inputId,
				label,
			}}
		>
			<InputRoot
				hasError={!!error}
				{...(props as InputRootProps)}
				ref={ref}
				name={name}
				id={inputId}
				autoComplete={name}
				defaultValue={defaultValue}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
			/>
		</Field>
	)
})
