'use client'

import { cn } from '@nerdfish/utils/class'
import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from 'lucide-react'
import {
	type CSSProperties,
	useEffect,
	useRef,
	type ComponentProps,
} from 'react'
import {
	type DayButton,
	DayPicker,
	getDefaultClassNames,
} from 'react-day-picker'
import { Button, buttonVariants } from '../button/button'

export { type DateRange } from 'react-day-picker'

export type CalendarDayButtonProps = ComponentProps<typeof DayButton>
export function CalendarDayButton({
	className,
	day,
	modifiers,
	...props
}: CalendarDayButtonProps) {
	const defaultClassNames = getDefaultClassNames()

	const ref = useRef<HTMLButtonElement>(null)
	useEffect(() => {
		if (modifiers.focused) ref.current?.focus()
	}, [modifiers.focused])

	return (
		<Button
			ref={ref}
			variant="ghost"
			icon
			data-day={day.date.toLocaleDateString()}
			data-selected-single={
				modifiers.selected && !modifiers.range_start && !modifiers.range_end
					? !modifiers.range_middle
					: null
			}
			data-range-start={modifiers.range_start}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			className={cn(
				'rounded-compact! data-[selected-single=true]:bg-background-inverted data-[selected-single=true]:text-foreground-inverted data-[range-middle=true]:bg-background-secondary/50 data-[range-middle=true]:text-foreground data-[range-start=true]:bg-background-inverted data-[range-start=true]:text-foreground-inverted data-[range-end=true]:bg-background-inverted data-[range-end=true]:text-foreground-inverted group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 gap-bff data-[range-end=true]:rounded-compact data-[range-end=true]:rounded-r-compact data-[range-start=true]:rounded-compact data-[range-start=true]:rounded-l-compact flex aspect-square size-auto w-full min-w-(--cell-size) flex-col leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-middle=true]:rounded-none [&>span]:text-xs [&>span]:opacity-70',
				'h-full!',
				defaultClassNames.day,
				className,
			)}
			{...props}
		/>
	)
}

export type CalendarProps = ComponentProps<typeof DayPicker> & {
	buttonVariant?: ComponentProps<typeof Button>['variant']
	cellSize?: string
}
export function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = 'label',
	buttonVariant = 'ghost',
	formatters,
	components,
	cellSize = '32px',
	...props
}: CalendarProps) {
	const defaultClassNames = getDefaultClassNames()

	return (
		<DayPicker
			style={
				{
					'--cell-size': cellSize,
				} as CSSProperties
			}
			showOutsideDays={showOutsideDays}
			className={cn(
				'bg-background group/calendar [--cell-size:--spacing(8)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent',
				String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
				String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
				className,
			)}
			captionLayout={captionLayout}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString('default', { month: 'short' }),
				...formatters,
			}}
			classNames={{
				root: cn('w-fit', defaultClassNames.root),
				months: cn(
					'gap-casual relative flex flex-col md:flex-row',
					defaultClassNames.months,
				),
				month: cn('gap-friends flex w-full flex-col', defaultClassNames.month),
				nav: cn(
					'gap-best-friends absolute inset-x-0 top-0 flex w-full items-center justify-between',
					defaultClassNames.nav,
				),
				button_previous: cn(
					buttonVariants({ variant: buttonVariant }),
					'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
					defaultClassNames.button_previous,
				),
				button_next: cn(
					buttonVariants({ variant: buttonVariant }),
					'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
					defaultClassNames.button_next,
				),
				month_caption: cn(
					'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
					defaultClassNames.month_caption,
				),
				dropdowns: cn(
					'gap-bff flex h-(--cell-size) w-full items-center justify-center text-sm font-medium',
					defaultClassNames.dropdowns,
				),
				dropdown_root: cn(
					'has-focus:border-ring border-input has-focus:ring-ring/50 rounded-compact relative border shadow-xs has-focus:ring-[3px]',
					defaultClassNames.dropdown_root,
				),
				dropdown: cn(
					'bg-popover absolute inset-0 opacity-0',
					defaultClassNames.dropdown,
				),
				caption_label: cn(
					'font-medium select-none',
					captionLayout === 'label'
						? 'text-sm'
						: '[&>svg]:text-foreground-muted gap-bff rounded-compact flex h-8 items-center pr-1 pl-2 text-sm [&>svg]:size-3.5',
					defaultClassNames.caption_label,
				),
				table: 'w-full border-collapse',
				weekdays: cn('gap-bff flex', defaultClassNames.weekdays),
				weekday: cn(
					'text-foreground-muted rounded-compact flex-1 text-[0.8rem] font-normal select-none',
					defaultClassNames.weekday,
				),
				week: cn('mt-best-friends gap-bff flex w-full', defaultClassNames.week),
				week_number_header: cn(
					'w-(--cell-size) select-none',
					defaultClassNames.week_number_header,
				),
				week_number: cn(
					'text-foreground-muted text-[0.8rem] select-none',
					defaultClassNames.week_number,
				),
				day: cn(
					'group/day data-[selected]:rounded-r-compact aspect-square h-full w-full p-0 text-center select-none',
					defaultClassNames.day,
				),
				range_start: cn(
					'bg-background-muted rounded-l-compact',
					defaultClassNames.range_start,
				),
				range_middle: cn(
					'relative rounded-none before:absolute',
					'before:content-[" "] before:bg-background-secondary/50 before:-inset-x-bff before:absolute before:inset-y-0 before:z-[0]',
					defaultClassNames.range_middle,
				),
				range_end: cn(
					'bg-background-muted rounded-r-compact',
					defaultClassNames.range_end,
				),
				today: cn(
					'bg-background-muted text-foreground rounded-compact',
					defaultClassNames.today,
				),
				outside: cn(
					defaultClassNames.outside,
					'text-foreground-muted/70 aria-selected:text-foreground-muted/50',
				),
				disabled: cn(
					'text-foreground-muted opacity-50',
					defaultClassNames.disabled,
				),
				hidden: cn('invisible', defaultClassNames.hidden),
				...classNames,
			}}
			components={{
				Root: ({ className: c, ...rest }) => {
					return <div data-slot="calendar" className={c} {...rest} />
				},
				Chevron: ({ className: c, orientation, ...rest }) => {
					if (orientation === 'left') {
						return <ChevronLeftIcon className={cn('size-4', c)} {...rest} />
					}

					if (orientation === 'right') {
						return <ChevronRightIcon className={cn('size-4', c)} {...rest} />
					}

					return <ChevronDownIcon className={cn('size-4', c)} {...rest} />
				},
				DayButton: CalendarDayButton,
				WeekNumber: ({ children, ...rest }) => {
					return (
						<td {...rest}>
							<div className="flex size-(--cell-size) items-center justify-center text-center">
								{children}
							</div>
						</td>
					)
				},
				...components,
			}}
			{...props}
		/>
	)
}
