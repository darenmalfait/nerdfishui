'use client'

import { cx } from '@nerdfish/utils'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { type DateRange, type SelectRangeEventHandler } from 'react-day-picker'

import { Badge } from './badge'
import { Button, buttonVariants } from './button'
import { Calendar, type CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

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
						className="m-sm text-primary/50 hover:text-primary/70 inline-flex text-sm"
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

const DatePickerTrigger = React.forwardRef<
	React.ElementRef<typeof PopoverTrigger>,
	React.ComponentPropsWithoutRef<typeof PopoverTrigger> & {
		selected?: Date
		placeholder?: string
	}
>(({ children, selected, className, placeholder, ...props }, ref) => {
	if (children) return <PopoverTrigger asChild>{children}</PopoverTrigger>

	return (
		<PopoverTrigger
			{...props}
			ref={ref}
			className={cx(
				buttonVariants({ variant: 'outline' }),
				'w-[280px] justify-start text-left font-normal',
				!selected && 'text-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-sm size-4" />
			<span>{selected ? format(selected, 'PPP') : placeholder}</span>
		</PopoverTrigger>
	)
})
DatePickerTrigger.displayName = 'DatePickerTrigger'

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
					initialFocus
					defaultMonth={selected}
					selected={selected}
					fromYear={fromYear}
					toYear={toYear}
					onSelect={onSelect}
				/>
				<Presets presets={presets} className="py-md" onChange={onSelect} />
			</PopoverContent>
		</Popover>
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
						initialFocus
						mode="range"
						defaultMonth={selected?.from}
						selected={selected}
						onSelect={onSelect}
						numberOfMonths={2}
						fromYear={fromYear}
						toYear={toYear}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export type DatepickerProps = React.ComponentPropsWithoutRef<typeof DatePicker>
export type DateRangePickerProps = React.ComponentPropsWithoutRef<
	typeof DateRangePicker
>
