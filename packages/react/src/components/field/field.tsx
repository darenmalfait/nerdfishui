'use client'

import { cx } from '@nerdfish/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useMemo, type ComponentProps } from 'react'
import { Label } from '../label/label'
import { Separator } from '../separator/separator'

export type FieldSetProps = ComponentProps<'fieldset'>
export function FieldSet({ className, ...props }: FieldSetProps) {
	return (
		<fieldset
			data-slot="field-set"
			className={cx(
				'gap-casual flex flex-col',
				'has-[>[data-slot=checkbox-group]]:gap-friends has-[>[data-slot=radio-group]]:gap-friends',
				className,
			)}
			{...props}
		/>
	)
}

export interface FieldLegendProps extends ComponentProps<'legend'> {
	variant?: 'legend' | 'label'
}
export function FieldLegend({
	className,
	variant = 'legend',
	...props
}: FieldLegendProps) {
	return (
		<legend
			data-slot="field-legend"
			data-variant={variant}
			className={cx(
				'mb-friends font-medium',
				'data-[variant=legend]:text-base',
				'data-[variant=label]:text-sm',
				className,
			)}
			{...props}
		/>
	)
}

export type FieldGroupProps = ComponentProps<'div'>
export function FieldGroup({ className, ...props }: FieldGroupProps) {
	return (
		<div
			data-slot="field-group"
			className={cx(
				'group/field-group data-[slot=checkbox-group]:gap-casual gap-casual *:data-[slot=field-group]:gap-friends @container/field-group flex w-full flex-col',
				className,
			)}
			{...props}
		/>
	)
}

export const fieldVariants = cva(
	'group/field flex w-full gap-best-friends data-[invalid=true]:text-destructive',
	{
		variants: {
			orientation: {
				vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
				horizontal: [
					'flex-row items-center',
					'[&>[data-slot=field-label]]:flex-auto',
					'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
				],
				responsive: [
					'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
					'@md/field-group:[&>[data-slot=field-label]]:flex-auto',
					'@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
				],
			},
		},
		defaultVariants: {
			orientation: 'vertical',
		},
	},
)

export interface FieldProps
	extends ComponentProps<'div'>,
		VariantProps<typeof fieldVariants> {}
export function Field({
	className,
	orientation = 'vertical',
	...props
}: FieldProps) {
	return (
		<div
			role="group"
			data-slot="field"
			data-orientation={orientation}
			className={cx(fieldVariants({ orientation }), className)}
			{...props}
		/>
	)
}

export type FieldContentProps = ComponentProps<'div'>
export function FieldContent({ className, ...props }: FieldContentProps) {
	return (
		<div
			data-slot="field-content"
			className={cx(
				'group/field-content gap-best-friends flex flex-1 flex-col leading-snug',
				className,
			)}
			{...props}
		/>
	)
}

export type FieldLabelProps = ComponentProps<typeof Label>
export function FieldLabel({ className, ...props }: FieldLabelProps) {
	return (
		<Label
			data-slot="field-label"
			className={cx(
				'group/field-label peer/field-label gap-best-friends flex w-fit leading-snug group-data-[disabled=true]/field:opacity-50',
				'*:data-[slot=field]:p-friends has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border',
				'has-data-[state=checked]:bg-background/5 has-data-[state=checked]:border-border',
				className,
			)}
			{...props}
		/>
	)
}

export type FieldTitleProps = ComponentProps<'div'>
export function FieldTitle({ className, ...props }: FieldTitleProps) {
	return (
		<div
			data-slot="field-label"
			className={cx(
				'gap-best-friends flex w-fit items-center text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

export type FieldDescriptionProps = ComponentProps<'p'>
export function FieldDescription({
	className,
	...props
}: FieldDescriptionProps) {
	return (
		<p
			data-slot="field-description"
			className={cx(
				'text-foreground-muted text-sm leading-normal font-normal group-has-data-[orientation=horizontal]/field:text-balance',
				'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
				'[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
				className,
			)}
			{...props}
		/>
	)
}

export type FieldSeparatorProps = ComponentProps<'div'>
export function FieldSeparator({
	children,
	className,
	...props
}: FieldSeparatorProps) {
	return (
		<div
			data-slot="field-separator"
			data-content={!!children}
			className={cx(
				'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
				className,
			)}
			{...props}
		>
			<Separator className="absolute inset-0 top-1/2" />
			{children ? (
				<span
					className="bg-background text-foreground-muted px-best-friends relative mx-auto block w-fit"
					data-slot="field-separator-content"
				>
					{children}
				</span>
			) : null}
		</div>
	)
}

export interface FieldErrorProps extends ComponentProps<'div'> {
	errors?: Array<{ message?: string } | undefined>
}
export function FieldError({
	className,
	children,
	errors,
	...props
}: FieldErrorProps) {
	const content = useMemo(() => {
		if (children) {
			return children
		}

		if (!errors?.length) {
			return null
		}

		if (errors.length == 1) {
			return errors[0]?.message
		}

		return (
			<ul className="gap-bff ml-4 flex list-disc flex-col">
				{errors.map(
					(error, index) =>
						error?.message && <li key={index}>{error.message}</li>,
				)}
			</ul>
		)
	}, [children, errors])

	if (!content) {
		return null
	}

	return (
		<div
			role="alert"
			data-slot="field-error"
			className={cx('text-destructive text-sm font-normal', className)}
			{...props}
		>
			{content}
		</div>
	)
}
