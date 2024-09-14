'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function FieldLabel({
	htmlFor,
	children,
	className,
}: {
	htmlFor?: string
	children?: React.ReactNode
	className?: string
}) {
	if (!children) return null

	return (
		<label
			data-slot="label"
			htmlFor={htmlFor}
			className={cx('text-primary block text-sm font-medium', className)}
		>
			{children}
		</label>
	)
}

export function FieldDescription({
	children,
	className,
}: {
	children?: React.ReactNode
	className?: string
}) {
	if (!children) return null

	return (
		<div
			data-slot="description"
			className={cx('text-muted text-sm', className)}
		>
			{children}
		</div>
	)
}

export function FieldError({
	children,
	errorId,
	className,
}: {
	children?: React.ReactNode
	errorId?: string
	className?: string
}) {
	if (!children) return null

	return (
		<div
			id={errorId}
			data-slot="description"
			className={cx('text-danger mb-0 mt-3 text-left text-sm', className)}
			role="alert"
		>
			{children}
		</div>
	)
}

type FieldProps = {
	htmlFor?: string
	label?: string
	error?: string | null
	errorId?: string
	description?: React.ReactNode
	descriptionId?: string
}

export const Field = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'> & FieldProps
>(function Field(
	{
		children,
		className,
		description,
		descriptionId,
		error,
		errorId,
		htmlFor,
		label,
		...props
	},
	ref,
) {
	return (
		<div className={cx('w-full', className)} {...props} ref={ref}>
			<FieldLabel
				htmlFor={htmlFor}
				className={!description ? 'mb-3' : undefined}
			>
				{label}
			</FieldLabel>
			<FieldDescription className="mb-3">{description}</FieldDescription>
			{children}
			<FieldError errorId={errorId}>{error}</FieldError>
		</div>
	)
})

export type { FieldProps }
