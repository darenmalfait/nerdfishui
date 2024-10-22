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
			className={className}
			classNames={{
				months:
					'flex flex-col sm:flex-row space-y-md sm:space-x-md sm:space-y-0',
				month: 'space-y-md',

				caption:
					'flex justify-center pt-sm relative space-x-sm items-center mx-auto',
				caption_label: 'flex items-center gap-sm text-sm font-medium',
				caption_dropdowns: 'flex relative gap-md [&_.rdp-vhidden]:hidden',
				dropdown_month: 'relative inline-flex items-center',
				dropdown_year: 'relative inline-flex items-center',
				dropdown:
					'absolute inset-0 w-full appearance-none opacity-0 z-10 cursor-pointer',

				nav: 'space-x-md flex items-center',
				nav_button: cx(buttonVariants({ variant: 'outline', size: 'iconSm' })),
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell: 'text-muted rounded-semi w-9 font-normal text-[0.8rem] ',
				row: 'flex w-full mr-sm',
				cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-muted [&:has([aria-selected])]:bg-muted focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-semi [&:has([aria-selected].day-range-start)]:rounded-l-semi [&:has([aria-selected].day-range-middle)]:!rounded-none ',
				day: cx(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
				),
				day_range_start: 'day-range-start',
				day_range_end: 'day-range-end',
				day_selected:
					'bg-inverted !text-inverted hover:!bg-inverted/90 day-selected',
				day_today:
					'bg-accent text-white hover:!bg-inverted/90 hover:!text-inverted',
				day_outside:
					'day-outside text-muted opacity-50 aria-selected:bg-accent/10 aria-selected:text-primary aria-selected:opacity-100',
				day_disabled: 'text-muted opacity-50',
				day_range_middle:
					'z-0 aria-selected:bg-accent/10 aria-selected:!text-primary hover:aria-selected:!text-inverted rounded-none day-range-middle',
				day_hidden: 'invisible',
				...classNames,
			}}
			components={{
				IconLeft: () => <ChevronLeft className="h-4 w-4" />,
				IconRight: () => <ChevronRight className="h-4 w-4" />,
			}}
			{...props}
		/>
	)
}
Calendar.displayName = 'Calendar'

export type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>
