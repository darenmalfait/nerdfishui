'use client'

import { cx, useControllableState } from '@nerdfish/utils'
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
import { InputIcon, type InputProps, inputVariants } from './input'

type TimePickerContextValue = ReturnType<typeof useTimescape>
const TimePickerContext = createContext<TimePickerContextValue | null>(null)

const useTimepickerContext = (): TimePickerContextValue => {
	const context = useContext(TimePickerContext)
	if (!context) {
		throw new Error(
			'Unable to access TimePickerContext. This component should be wrapped by a TimePicker component',
		)
	}
	return context
}

type TimeDateType = Exclude<DateType, 'days' | 'months' | 'years'>

const SEGMENT_PLACEHOLDER: {
	[key in TimeDateType]: string
} = {
	hours: '00',
	minutes: '00',
	seconds: '00',
	'am/pm': 'AM',
}

export const TimePickerSegment = forwardRef<
	React.ElementRef<'input'>,
	Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
		segment: TimeDateType
		inputClassName?: string
	}
>(({ segment, inputClassName, className, ...props }, ref) => {
	const { getInputProps } = useTimepickerContext()
	const { ref: timePickerInputRef } = getInputProps(segment)

	return (
		<div
			className={cx(
				'focus-within:bg-inverted/10 text-primary rounded-lg px-2 py-1',
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
				placeholder={SEGMENT_PLACEHOLDER[segment]}
				{...props}
				className={cx(
					'tabular-nums caret-transparent',
					'border-transparent bg-transparent outline-none ring-0 ring-offset-0 focus-visible:border-transparent focus-visible:ring-0',
					{
						'w-[2ch]': segment === 'hours' || segment === 'minutes',
					},
					inputClassName,
				)}
			/>
		</div>
	)
})
TimePickerSegment.displayName = 'TimePickerSegment'

export type TimePickerSegmentProps = React.ComponentPropsWithoutRef<
	typeof TimePickerSegment
>

export const TimePickerSeparator = forwardRef<
	React.ElementRef<'span'>,
	HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
	return (
		<span
			ref={ref}
			{...props}
			className={cx('time-primary py-1 text-sm', className)}
		/>
	)
})
TimePickerSeparator.displayName = 'TimePickerSeparator'

export type TimePickerSeparatorProps = React.ComponentPropsWithoutRef<
	typeof TimePickerSeparator
>

const DEFAULT_OPTIONS: Options = {
	hour12: false,
	digits: '2-digit',
}

export const TimePicker = forwardRef<
	React.ElementRef<'div'>,
	Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> &
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

		return (
			<TimePickerContext.Provider value={timePickerContext}>
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
					<span className="flex flex-1 items-center justify-start">
						{children}
					</span>
					<InputIcon icon={icon} variant={variant} />
					{addOnTrailing}
				</div>
			</TimePickerContext.Provider>
		)
	},
)
TimePicker.displayName = 'TimePicker'

export type TimePickerProps = React.ComponentPropsWithoutRef<typeof TimePicker>
