'use client'

import { cn } from '@nerdfish/utils/class'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { useControllableState } from '../../hooks/use-controllable-state'
import { Badge } from '../badge/badge'
import { buttonVariants } from '../button/button'
import { Calendar, type CalendarProps } from '../calendar/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover'

export type DatePickerPreset = { value: Date; label: string }

function Presets({
	presets = [],
	onChange,
	className,
}: {
	presets?: DatePickerPreset[]
	onChange?: (value: Date | undefined) => void
	className?: string
}) {
	if (!presets.length) return null

	return (
		<div className={cn('px-friends flex max-w-62.5 flex-wrap', className)}>
			{presets.map(({ value, label }) => {
				return (
					<Badge
						key={value.toISOString()}
						render={
							<button
								key={value.toISOString()}
								type="button"
								className="m-bff hover:bg-background-inverted/20 inline-flex text-sm first:ml-0"
								onClick={() => onChange?.(value)}
							>
								{label}
							</button>
						}
						variant="muted"
					/>
				)
			})}
		</div>
	)
}

type DatePickerTriggerProps = React.ComponentProps<typeof PopoverTrigger> & {
	selected?: Date
	placeholder?: string
}
function DatePickerTrigger({
	children,
	selected,
	className,
	placeholder,
	...props
}: DatePickerTriggerProps) {
	if (children) return <PopoverTrigger render={children as any} />

	return (
		<PopoverTrigger
			{...props}
			className={cn(
				buttonVariants({ variant: 'outline' }),
				'w-70 justify-start text-left font-normal',
				!selected && 'text-foreground-muted',
				className,
			)}
		>
			<CalendarIcon className="mr-best-friends size-4" />
			<span>{selected ? format(selected, 'PPP') : placeholder}</span>
		</PopoverTrigger>
	)
}

export type DatePickerProps = CalendarProps & {
	selected?: Date
	onSelect?: (value: Date | undefined) => void
	presets?: DatePickerPreset[]
	placeholder?: string
	children?: React.ReactNode
}
export function DatePicker({
	className,
	selected: selectedProp,
	onSelect,
	presets,
	placeholder = 'Pick a date',
	children,
	...props
}: DatePickerProps) {
	const [selected, setSelected] = useControllableState(
		selectedProp,
		undefined,
		onSelect,
	)

	return (
		<Popover>
			<DatePickerTrigger
				selected={selected}
				className={className}
				placeholder={placeholder}
			>
				{children}
			</DatePickerTrigger>
			<PopoverContent className="w-auto">
				<Calendar
					captionLayout="dropdown"
					{...props}
					mode="single"
					defaultMonth={selected}
					selected={selected}
					onSelect={setSelected}
				/>
				<Presets
					presets={presets}
					className="py-friends"
					onChange={setSelected}
				/>
			</PopoverContent>
		</Popover>
	)
}
