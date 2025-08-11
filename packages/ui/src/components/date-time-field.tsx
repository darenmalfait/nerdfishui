'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { type Options } from 'timescape'
import { type DateType, useTimescape } from 'timescape/react'
import { useControllableState } from '../hooks'
import { InputIcon, type InputProps, inputVariants } from './input'

type DateTimeContextValue = ReturnType<typeof useTimescape>
const DateTimeContext = React.createContext<DateTimeContextValue | null>(null)

const useTimepickerContext = (): DateTimeContextValue => {
	const context = React.useContext(DateTimeContext)
	if (!context) {
		throw new Error(
			'Unable to access DateTimeContext. This component should be wrapped by a DateTime component',
		)
	}
	return context
}

export type { DateType } from 'timescape'

export const DATE_TIME_SEGMENT_PLACEHOLDER: {
	[key in DateType]: string
} = {
	hours: '--',
	minutes: '--',
	seconds: '--',
	'am/pm': '--',
	days: '--',
	months: '--',
	years: '----',
}

export interface DateTimeSegmentProps
	extends Omit<React.ComponentProps<'input'>, 'value' | 'onChange'> {
	segment: DateType
	inputClassName?: string
}
export function DateTimeSegment({
	segment,
	inputClassName,
	className,
	ref,
	...props
}: DateTimeSegmentProps) {
	const { getInputProps } = useTimepickerContext()
	const { ref: timePickerInputRef } = getInputProps(segment)

	return (
		<div
			className={cx(
				'p-xs text-foreground focus-within:bg-foreground/10 rounded-lg',
			)}
		>
			<input
				{...getInputProps(segment)}
				ref={(node) => {
					if (typeof ref === 'function') {
						ref(node)
					} else if (ref) ref.current = node
					timePickerInputRef(node)
				}}
				placeholder={DATE_TIME_SEGMENT_PLACEHOLDER[segment]}
				{...props}
				className={cx(
					'tabular-nums caret-transparent',
					'border-transparent bg-transparent outline-none ring-0 ring-offset-0 focus-visible:border-transparent focus-visible:ring-0',
					{
						'w-[2ch]': segment !== 'years',
						'w-[4ch]': segment === 'years',
					},
					inputClassName,
				)}
			/>
		</div>
	)
}

export type DateTimeSeparatorProps = React.ComponentProps<'span'>
export function DateTimeSeparator({
	className,
	...props
}: DateTimeSeparatorProps) {
	return (
		<span
			{...props}
			className={cx(
				'text-foreground-muted align-middle tabular-nums',
				className,
			)}
		/>
	)
}

export const DEFAULT_DATETIMEFIELD_OPTIONS: Options = {
	hour12: false,
	digits: '2-digit',
}

export interface DateTimeFieldProps
	extends Omit<InputProps, 'value' | 'onChange' | 'defaultValue'> {
	value?: Date
	defaultValue?: Date
	onChange?: (date?: Date) => void
	children?: React.ReactNode
	options?: Omit<Options, 'date' | 'onChangeDate'>
}
export function DateTimeField({
	value: valueProp,
	onChange: onChangeProp,
	defaultValue,
	options,
	className,
	inputSize,
	variant,
	children,
	addOnLeading,
	addOnTrailing,
	icon,
	...props
}: DateTimeFieldProps) {
	const [value, setValue] = useControllableState<Date | undefined>(
		valueProp,
		defaultValue,
		onChangeProp,
	)

	const timePickerContext = useTimescape({
		...DEFAULT_DATETIMEFIELD_OPTIONS,
		date: value,
		onChangeDate: setValue,
		...options,
	})

	// Keep the date in sync in case it's controlled from somewhere else (ie. DatePicker)
	React.useEffect(() => {
		if (value !== timePickerContext.options.date) {
			timePickerContext.update((state) => ({
				...state,
				date: value,
			}))
		}
	}, [timePickerContext, value])

	return (
		<DateTimeContext value={timePickerContext}>
			<div
				{...props}
				className={cx(
					inputVariants({ inputSize, variant }),
					'gap-sm flex',
					className,
				)}
			>
				{addOnLeading}
				<span className="gap-sm flex flex-1 items-center justify-start">
					{children}
				</span>
				<InputIcon icon={icon} variant={variant} />
				{addOnTrailing}
			</div>
		</DateTimeContext>
	)
}
