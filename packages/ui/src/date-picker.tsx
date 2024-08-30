'use client'

import { cx } from '@nerdfish/utils'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { type SelectRangeEventHandler, type DateRange } from 'react-day-picker'

import { Badge } from './badge'
import { Button } from './button'
import { Calendar, type CalendarProps } from './calendar'
import { Popover } from './popover'

export type DatepickerPreset = { value: string; label: string }
export type { DateRange }

function Presets({
	presets = [],
	onChange,
	className,
}: {
	presets?: DatepickerPreset[]
	onChange?: (value: Date | undefined) => void
	className?: string
}) {
	if (!presets.length) return null

	return (
		<div className={cx('flex max-w-[250px] flex-wrap px-3', className)}>
			{presets.map(({ value, label }) => {
				return (
					<button
						key={value}
						type="button"
						className="text-primary/50 hover:text-primary/70 m-1 inline-flex text-sm"
						onClick={() => onChange?.(addDays(new Date(), parseInt(value, 10)))}
					>
						<Badge>{label}</Badge>
					</button>
				)
			})}
		</div>
	)
}

function DatePickerTrigger({
	children,
	selected,
	className,
	placeholder,
}: {
	children?: React.ReactNode
	selected?: Date
	className?: string
	placeholder?: string
}) {
	if (children) return children

	return (
		<Button
			variant="outline"
			className={cx(
				'w-[280px] justify-start text-left font-normal',
				!selected && 'text-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-2 size-4" />
			<span>{selected ? format(selected, 'PPP') : placeholder}</span>
		</Button>
	)
}

export function DatePicker({
	className,
	selected,
	onSelect,
	presets,
	placeholder = 'Pick a date',
	children,
	fromYear,
	toYear,
	...props
}: CalendarProps & {
	className?: string
	selected?: Date
	onSelect?: (value: Date | undefined) => void
	presets?: DatepickerPreset[]
	placeholder?: string
	children?: React.ReactNode
}) {
	return (
		<Popover.Root>
			<Popover.Trigger>
				<DatePickerTrigger
					selected={selected}
					className={className}
					placeholder={placeholder}
				>
					{children}
				</DatePickerTrigger>
			</Popover.Trigger>
			<Popover.Content className="w-auto p-0">
				<Calendar
					{...props}
					mode="single"
					initialFocus
					defaultMonth={selected}
					selected={selected}
					fromYear={fromYear}
					toYear={toYear}
					onSelect={onSelect}
				/>
				<Presets presets={presets} className="py-3" onChange={onSelect} />
			</Popover.Content>
		</Popover.Root>
	)
}

export function DateRangePickerTrigger({
	children,
	selected,
	className,
	placeholder,
}: {
	children?: React.ReactNode
	className?: string
	selected?: DateRange
	placeholder?: string
}) {
	if (children) return children

	return (
		<Button
			id="date"
			variant="outline"
			className={cx(
				'w-[300px] justify-start text-left font-normal',
				!selected && 'text-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-2 size-4" />
			<span>
				{selected?.from ? (
					selected.to ? (
						<>
							{format(selected.from, 'LLL dd, y')} -{' '}
							{format(selected.to, 'LLL dd, y')}
						</>
					) : (
						format(selected.from, 'LLL dd, y')
					)
				) : (
					placeholder
				)}
			</span>
		</Button>
	)
}

export function DateRangePicker({
	className,
	selected,
	onSelect,
	children,
	fromYear,
	toYear,
	placeholder,
	...props
}: CalendarProps & {
	selected?: DateRange
	onSelect?: SelectRangeEventHandler
	children?: React.ReactNode
	placeholder?: string
}) {
	return (
		<div className={cx('grid gap-2', className)}>
			<Popover.Root>
				<Popover.Trigger>
					<DateRangePickerTrigger
						selected={selected}
						className={className}
						placeholder={placeholder}
					>
						{children}
					</DateRangePickerTrigger>
				</Popover.Trigger>
				<Popover.Content className="w-auto p-0" align="start">
					<Calendar
						{...props}
						initialFocus
						mode="range"
						defaultMonth={selected?.from}
						selected={selected}
						onSelect={onSelect}
						numberOfMonths={2}
						fromYear={fromYear}
						toYear={toYear}
					/>
				</Popover.Content>
			</Popover.Root>
		</div>
	)
}

export type DatepickerProps = React.ComponentPropsWithoutRef<typeof DatePicker>
export type DateRangePickerProps = React.ComponentPropsWithoutRef<
	typeof DateRangePicker
>
