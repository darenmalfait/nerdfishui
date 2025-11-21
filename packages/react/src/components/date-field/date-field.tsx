'use client'

import { cn, type VariantProps } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'
import {
	composeRenderProps,
	type DateFieldProps as BaseDateFieldProps,
	DateField as DateFieldRa,
	type DateInputProps as DateInputPropsRa,
	DateInput as DateInputRa,
	type DateSegmentProps,
	DateSegment as DateSegmentRa,
	type DateValue as DateValueRa,
	I18nProvider,
	type TimeFieldProps as BaseTimeFieldProps,
	TimeField as TimeFieldRa,
	type TimeValue as TimeValueRa,
} from 'react-aria-components'
import { inputVariants } from '../input/input'

export type DateValue = DateValueRa

type LocaleProps = Partial<Pick<ComponentProps<typeof I18nProvider>, 'locale'>>

export type DateFieldProps<T extends DateValueRa> = BaseDateFieldProps<T> &
	LocaleProps
export function DateField<T extends DateValueRa>({
	className,
	children,
	locale = 'nl-BE',
	...props
}: DateFieldProps<T>) {
	return (
		<I18nProvider locale={locale}>
			<DateFieldRa
				className={composeRenderProps(className, (c) => cn(c))}
				data-slot="datefield"
				hourCycle={24}
				shouldForceLeadingZeros={true}
				{...props}
			>
				{children}
			</DateFieldRa>
		</I18nProvider>
	)
}

export type TimeFieldProps<T extends TimeValueRa> = BaseTimeFieldProps<T> &
	LocaleProps
export function TimeField<T extends TimeValueRa>({
	className,
	locale = 'nl-BE',
	children,
	...props
}: TimeFieldProps<T>) {
	return (
		<I18nProvider locale={locale}>
			<TimeFieldRa
				className={composeRenderProps(className, (c) => cn(c))}
				data-slot="datefield"
				hourCycle={24}
				shouldForceLeadingZeros={true}
				{...props}
			>
				{children}
			</TimeFieldRa>
		</I18nProvider>
	)
}

export { type DateSegmentProps }
export function DateSegment({ className, ...props }: DateSegmentProps) {
	return (
		<DateSegmentRa
			className={composeRenderProps(className, (c) =>
				cn(
					`text-foreground data-[type=literal]:text-foreground-muted/70 data-placeholder:text-foreground-muted/70 data-invalid:data-focused:bg-destructive data-invalid:data-placeholder:text-destructive data-invalid:text-destructive data-invalid:data-focused:data-placeholder:text-destructive-foreground data-invalid:data-focused:text-destructive-foreground data-focused:bg-background-inverted/20 data-focused:data-placeholder:text-foreground data-focused:text-foreground inline-flex rounded px-0.5 caret-transparent outline-hidden data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[type=literal]:px-0`,
					c,
				),
			)}
			{...props}
		/>
	)
}

export const dateInputStyles = `
  relative inline-flex items-center overflow-hidden whitespace-nowrap
  data-focus-within:ring-ring/30 data-focus-within:border-ring data-focus-within:outline-none data-focus-within:ring-[3px] 
  data-focus-within:has-aria-invalid:ring-destructive/20 data-focus-within:has-aria-invalid:border-destructive
`

export interface DateInputProps
	extends DateInputPropsRa,
		VariantProps<typeof inputVariants> {
	className?: string
}

export function DateInput({
	className,
	size = 'md',
	variant,
	...props
}: Omit<DateInputProps, 'children'>) {
	return (
		<DateInputRa
			data-slot="input"
			className={composeRenderProps(className, (c) =>
				cn(inputVariants({ size, variant }), dateInputStyles, c),
			)}
			{...props}
		>
			{(segment) => {
				return <DateSegment segment={segment} />
			}}
		</DateInputRa>
	)
}
