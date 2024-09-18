'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import {
	createContext,
	forwardRef,
	type HTMLAttributes,
	type ReactNode,
	useContext,
} from 'react'
import { type Options } from 'timescape'
import { type DateType, useTimescape } from 'timescape/react'
import { useControllableState } from '../hooks'
import { InputIcon, type InputProps, inputVariants } from './input'

type DateTimeContextValue = ReturnType<typeof useTimescape>
const DateTimeContext = createContext<DateTimeContextValue | null>(null)

const useTimepickerContext = (): DateTimeContextValue => {
	const context = useContext(DateTimeContext)
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

export const DateTimeSegment = forwardRef<
	React.ElementRef<'input'>,
	Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
		segment: DateType
		inputClassName?: string
	}
>(({ segment, inputClassName, className, ...props }, ref) => {
	const { getInputProps } = useTimepickerContext()
	const { ref: timePickerInputRef } = getInputProps(segment)

	return (
		<div
			className={cx('focus-within:bg-inverted/10 text-primary rounded-lg p-1')}
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
})
DateTimeSegment.displayName = 'DateTimeSegment'

export type DateTimeSegmentProps = React.ComponentPropsWithoutRef<
	typeof DateTimeSegment
>

export const DateTimeSeparator = forwardRef<
	React.ElementRef<'span'>,
	HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
	return (
		<span
			ref={ref}
			{...props}
			className={cx(
				'text-muted align-top align-middle tabular-nums',
				className,
			)}
		/>
	)
})
DateTimeSeparator.displayName = 'DateTimeSeparator'

export type DateTimeSeparatorProps = React.ComponentPropsWithoutRef<
	typeof DateTimeSeparator
>

const DEFAULT_OPTIONS: Options = {
	hour12: false,
	digits: '2-digit',
}

export const DateTimeField = forwardRef<
	React.ElementRef<'div'>,
	Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'> &
		Omit<InputProps, 'value' | 'onChange' | 'defaultValue'> & {
			value?: Date
			defaultValue?: Date
			onChange?: (date?: Date) => void
			children?: ReactNode
			options?: Omit<Options, 'date' | 'onChangeDate'>
		}
>(
	(
		{
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
		},
		ref,
	) => {
		const [value, setValue] = useControllableState<Date | undefined>(
			valueProp,
			defaultValue,
			onChangeProp,
		)

		const timePickerContext = useTimescape({
			...DEFAULT_OPTIONS,
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
			<DateTimeContext.Provider value={timePickerContext}>
				<div
					ref={ref}
					{...props}
					className={cx(
						inputVariants({ inputSize, variant }),
						'flex gap-1',
						className,
					)}
				>
					{addOnLeading}
					<span className="flex flex-1 items-center justify-start gap-1">
						{children}
					</span>
					<InputIcon icon={icon} variant={variant} />
					{addOnTrailing}
				</div>
			</DateTimeContext.Provider>
		)
	},
)
DateTimeField.displayName = 'DateTimeField'

export type DateTimeFieldProps = React.ComponentPropsWithoutRef<
	typeof DateTimeField
>
