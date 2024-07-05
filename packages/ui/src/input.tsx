'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertCircle } from 'lucide-react'
import * as React from 'react'

import { Field } from './field'

const inputVariants = cva(
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

const addonVariants = cva(
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

type InputSize = VariantProps<typeof inputVariants>['size']

type RawInputProps = {
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

type InputProps = {
	defaultValue?: string | null
	name: string
	label?: string
	className?: string
	error?: string | null
	description?: React.ReactNode
}

function getInputClassName(
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
		hasError && 'border-danger bg-danger-muted/50 text-danger',
		// Custom
		className,
	)
}

function FormHelperText({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return <div className={cx('text-muted text-sm', className)} {...props} />
}

function Label({
	className,
	htmlFor,
	...props
}: React.ComponentPropsWithoutRef<'label'>) {
	return (
		<label
			data-slot="label"
			htmlFor={htmlFor}
			className={cx('text-primary block text-sm font-medium', className)}
			{...props}
		/>
	)
}

function Description({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div
			data-slot="description"
			{...props}
			className={cx('text-muted text-sm', className)}
		/>
	)
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
				addonVariants({ size: inputSize }),
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

const RawInput = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	RawInputProps
>(function RawInput(props, ref) {
	const {
		type,
		hasError,
		addOnLeading,
		addOnTrailing,
		children,
		inputSize,
		icon: Icon,
		...rawInputProps
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
					{...(rawInputProps as React.ComponentPropsWithoutRef<'textarea'>)}
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
					{...(rawInputProps as React.ComponentPropsWithoutRef<'input'>)}
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

function InputError({
	className,
	id,
	...props
}: React.ComponentPropsWithoutRef<'div'> & { id?: string }) {
	if (!props.children) {
		return null
	}

	return (
		<div
			data-slot="description"
			{...props}
			className={cx('text-danger mb-0 text-left text-sm', className)}
			role="alert"
			id={id}
		/>
	)
}

const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps & RawInputProps
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
			<RawInput
				hasError={!!error}
				{...(props as RawInputProps)}
				ref={ref}
				name={name}
				id={inputId}
				autoComplete={name}
				required
				defaultValue={defaultValue}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
			/>
		</Field>
	)
})

export {
	FormHelperText,
	getInputClassName,
	Input,
	InputError,
	Label,
	Description,
	RawInput,
}

export type { RawInputProps, InputProps, InputSize }
