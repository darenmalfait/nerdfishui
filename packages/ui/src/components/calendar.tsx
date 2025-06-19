'use client'

import { cx } from '@nerdfish/utils'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type * as React from 'react'
import {
	DayPicker,
	type DropdownNavProps,
	type DropdownProps,
	type DayPickerProps,
} from 'react-day-picker'

import { buttonVariants } from './button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './select'

export type CalendarProps = DayPickerProps

export function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	components: userComponents,
	...props
}: DayPickerProps) {
	const handleCalendarChange = (
		_value: string | number,
		_e: React.ChangeEventHandler<HTMLSelectElement>,
	) => {
		const _event = {
			target: {
				value: String(_value),
			},
		} as React.ChangeEvent<HTMLSelectElement>
		_e(_event)
	}

	const defaultComponents = {
		Chevron: (componentProps: React.ComponentProps<typeof ChevronLeftIcon>) => {
			if (componentProps.orientation === 'left') {
				return (
					<ChevronLeftIcon
						size={16}
						strokeWidth={2}
						{...componentProps}
						aria-hidden="true"
					/>
				)
			}
			return (
				<ChevronRightIcon
					size={16}
					strokeWidth={2}
					{...componentProps}
					aria-hidden="true"
				/>
			)
		},
		DropdownNav: (componentProps: DropdownNavProps) => {
			return (
				<div className="flex w-full items-center gap-2">
					{componentProps.children}
				</div>
			)
		},
		Dropdown: (componentProps: DropdownProps) => {
			return (
				<Select
					value={String(componentProps.value)}
					onValueChange={(value) => {
						if (componentProps.onChange) {
							handleCalendarChange(value, componentProps.onChange)
						}
					}}
				>
					<SelectTrigger className="h-8 w-fit font-medium first:grow">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
						{componentProps.options?.map((option) => (
							<SelectItem
								key={option.value}
								value={String(option.value)}
								disabled={option.disabled}
							>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)
		},
	}

	const mergedComponents = {
		...defaultComponents,
		...userComponents,
	}

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout="dropdown"
			className={className}
			components={mergedComponents}
			classNames={{
				months: 'relative flex flex-col sm:flex-row gap-4',
				month: 'w-full',
				month_caption:
					'relative mx-10 mb-1 flex h-9 items-center justify-center z-20',
				caption_label: 'text-sm font-medium',
				nav: 'absolute top-0 flex w-full justify-between z-10',
				button_previous: cx(
					buttonVariants({ variant: 'ghost' }),
					'text-foreground-muted/80 hover:text-foreground size-9 p-0',
				),
				button_next: cx(
					buttonVariants({ variant: 'ghost' }),
					'text-foreground-muted/80 hover:text-foreground size-9 p-0',
				),
				weekday: 'size-9 p-0 text-xs font-medium text-foreground-muted/80',
				day_button:
					'relative flex size-9 items-center justify-center whitespace-nowrap rounded-base p-0 text-foreground outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-muted group-data-[selected]:bg-inverted group-data-[selected]:text-inverted hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-secondary group-data-[selected]:group-[.range-middle]:hover:bg-muted group-data-[selected]:group-[.range-middle]:text-foreground',
				day: 'group size-9 px-0 text-sm',
				range_start: 'range-start',
				range_end: 'range-end',
				range_middle: 'range-middle',
				today:
					'*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-brand [&[data-selected]:not(.range-middle)>*]:after:bg-brand [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors',
				outside:
					'text-foreground-muted data-selected:bg-brand/50 data-selected:text-foreground-muted',
				hidden: 'invisible',
				week_number: 'size-9 p-0 text-xs font-medium text-foreground-muted/80',
			}}
			{...props}
		/>
	)
}
