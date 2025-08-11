'use client'

import { cx } from '@nerdfish/utils'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { type DateRange, type OnSelectHandler } from 'react-day-picker'
import { Badge } from './badge'
import { Button, buttonVariants } from './button'
import { Calendar, type CalendarProps } from './calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	type PopoverTriggerProps,
} from './popover'

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
						className="m-sm text-foreground/50 hover:text-foreground/70 inline-flex text-sm"
						onClick={() =>
							onChange?.(addDays(new Date(), Number.parseInt(value, 10)))
						}
					>
						<Badge>{label}</Badge>
					</button>
				)
			})}
		</div>
	)
}

export interface DatePickerTriggerProps extends PopoverTriggerProps {
	selected?: Date
	placeholder?: string
}
export function DatePickerTrigger({
	children,
	selected,
	className,
	placeholder,
	...props
}: DatePickerTriggerProps) {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (children) return <PopoverTrigger render={<>{children}</>} />

	return (
		<PopoverTrigger
			{...props}
			className={cx(
				buttonVariants({ variant: 'outline' }),
				'w-[280px] justify-start text-left font-normal',
				!selected && 'text-foreground-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-sm size-4" />
			<span>{selected ? format(selected, 'PPP') : placeholder}</span>
		</PopoverTrigger>
	)
}

export type DatePickerProps = CalendarProps & {
	className?: string
	selected?: Date
	onSelect?: (value: Date | undefined) => void
	presets?: DatepickerPreset[]
	placeholder?: string
	children?: React.ReactNode
}
export function DatePicker({
	className,
	selected,
	onSelect,
	presets,
	placeholder = 'Pick a date',
	children,
	startMonth,
	endMonth,
	...props
}: DatePickerProps) {
	return (
		<Popover>
			<DatePickerTrigger
				selected={selected}
				className={className}
				placeholder={placeholder}
			>
				{children}
			</DatePickerTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					{...props}
					mode="single"
					autoFocus
					defaultMonth={selected}
					selected={selected}
					startMonth={startMonth}
					endMonth={endMonth}
					onSelect={onSelect}
				/>
				<Presets presets={presets} className="py-md" onChange={onSelect} />
			</PopoverContent>
		</Popover>
	)
}

export interface DateRangePickerTriggerProps {
	children?: React.ReactNode
	className?: string
	selected?: DateRange
	placeholder?: string
}
export function DateRangePickerTrigger({
	children,
	selected,
	className,
	placeholder,
}: DateRangePickerTriggerProps) {
	if (children) return children

	return (
		<Button
			id="date"
			variant="outline"
			className={cx(
				'w-[300px] justify-start text-left font-normal',
				!selected && 'text-foreground-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-sm size-4" />
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

export type DateRangePickerProps = CalendarProps & {
	selected?: DateRange
	children?: React.ReactNode
	placeholder?: string
	onSelect?: OnSelectHandler<DateRange | undefined>
}
export function DateRangePicker({
	className,
	selected,
	onSelect,
	children,
	startMonth,
	endMonth,
	placeholder,
	...props
}: DateRangePickerProps) {
	return (
		<div className={cx('gap-sm grid', className)}>
			<Popover>
				<PopoverTrigger>
					<DateRangePickerTrigger
						selected={selected}
						className={className}
						placeholder={placeholder}
					>
						{children}
					</DateRangePickerTrigger>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						{...props}
						autoFocus
						mode="range"
						defaultMonth={selected?.from}
						selected={selected}
						onSelect={onSelect}
						numberOfMonths={2}
						startMonth={startMonth}
						endMonth={endMonth}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
