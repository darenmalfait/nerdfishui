'use client'

import { cx } from '@nerdfish/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'

import { buttonVariants } from './button'

export function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: DayPickerProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout="dropdown-buttons"
			className={cx('p-3', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
				month: 'space-y-4',
				caption: 'flex justify-center pt-1 relative items-center px-10',
				caption_label: 'flex items-center gap-2 text-sm font-medium',
				caption_dropdowns: 'flex gap-4 [&_.rdp-vhidden]:hidden',
				dropdown_month: 'relative inline-flex items-center',
				dropdown_year: 'relative inline-flex items-center',
				dropdown:
					'absolute inset-0 w-full appearance-none opacity-0 z-10 cursor-pointer',
				nav: 'space-x-1 flex items-center',
				nav_button: cx(
					buttonVariants({ variant: 'outline' }),
					'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
				),
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell: 'text-muted rounded-3xl w-9 font-normal text-[0.8rem]',
				row: 'flex w-full mt-2',
				cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-3xl [&:has([aria-selected].day-outside)]:bg-muted [&:has([aria-selected])]:bg-muted first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
				day: cx(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
				),
				day_range_start: 'scale-110 z-10',
				day_range_end: 'scale-110 z-10',
				day_selected:
					'bg-inverted rounded-full !text-inverted hover:!bg-inverted/90',
				day_today:
					'bg-accent text-white hover:!bg-inverted/90 hover:!text-inverted',
				day_outside:
					'day-outside text-muted opacity-50 aria-selected:bg-muted aria-selected:text-muted aria-selected:opacity-80',
				day_disabled: 'text-muted opacity-50',
				day_range_middle:
					'z-0 aria-selected:bg-accent/10 aria-selected:!text-primary hover:aria-selected:!text-inverted rounded-none',
				day_hidden: 'invisible',
				...classNames,
			}}
			components={{
				IconLeft: () => <ChevronLeft className="size-4" />,
				IconRight: () => <ChevronRight className="size-4" />,
			}}
			{...props}
		/>
	)
}
Calendar.displayName = 'Calendar'

export type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>
