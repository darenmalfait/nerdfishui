'use client'

import { cx } from '@nerdfish/utils'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { forwardRef } from 'react'
import { useControllableState } from '../hooks'
import { Button } from './button'
import { DatePicker } from './date-picker'
import {
	DateTimeField,
	DateTimeSegment,
	DateTimeSeparator,
	type DateType,
} from './date-time-field'
import { inputVariants } from './input'

type DATE_FIELDS = Exclude<DateType, 'hours' | 'minutes' | 'seconds' | 'am/pm'>
type TIME_FIELDS = Exclude<DateType, 'years' | 'months' | 'days'>

export const DateTimePicker = forwardRef<
	React.ElementRef<typeof DateTimeField>,
	Omit<
		React.ComponentPropsWithoutRef<typeof DateTimeField>,
		'addonTrailing' | 'icon'
	> & {
		withTime?: boolean
		dateFormat?: DATE_FIELDS[]
		timeFormat?: TIME_FIELDS[]
		separator?: React.ReactNode
	}
>(
	(
		{
			withTime,
			dateFormat = ['days', 'months', 'years'],
			timeFormat = ['hours', 'minutes'],
			separator = '/',
			value,
			defaultValue,
			onChange,
			...props
		},
		ref,
	) => {
		const [date, setDate] = useControllableState(value, defaultValue, onChange)

		return (
			<DateTimeField
				{...props}
				value={date}
				defaultValue={defaultValue}
				onChange={setDate}
				ref={ref}
				addOnTrailing={
					<DatePicker
						className="p-sm"
						selected={date}
						onSelect={setDate}
						footer={
							withTime ? (
								<div className="flex justify-center">
									<DateTimeField
										value={date}
										defaultValue={defaultValue}
										onChange={setDate}
										ref={ref}
										className={cx(
											inputVariants({ inputSize: 'sm' }),
											'mt-sm gap-sm mx-auto inline-flex w-auto items-center',
										)}
									>
										{timeFormat.map((field, i) => (
											<>
												{i > 0 ? (
													<DateTimeSeparator>:</DateTimeSeparator>
												) : null}
												<DateTimeSegment key={field} segment={field} />
											</>
										))}
									</DateTimeField>
								</div>
							) : null
						}
					>
						<Button size="iconSm" variant="default">
							<CalendarIcon className="size-4" />
						</Button>
					</DatePicker>
				}
			>
				{dateFormat.map((field, i) => (
					<React.Fragment key={field}>
						{i > 0 ? <DateTimeSeparator>{separator}</DateTimeSeparator> : null}
						<DateTimeSegment segment={field} />
					</React.Fragment>
				))}
				{withTime ? <DateTimeSeparator /> : null}
				{withTime
					? timeFormat.map((field, i) => (
							<>
								{i > 0 ? <DateTimeSeparator>:</DateTimeSeparator> : null}
								<DateTimeSegment key={field} segment={field} />
							</>
						))
					: null}
			</DateTimeField>
		)
	},
)
DateTimePicker.displayName = 'DateTimePicker'

export type DateTimePickerProps = React.ComponentPropsWithoutRef<
	typeof DateTimePicker
>
