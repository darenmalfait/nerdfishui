'use client'

import { cx } from '@nerdfish/utils'
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
			className={cx(
				'!rounded-compact data-[selected-single=true]:bg-background-inverted data-[selected-single=true]:text-foreground-inverted data-[range-middle=true]:bg-background-secondary data-[range-middle=true]:text-foreground data-[range-start=true]:bg-background-inverted data-[range-start=true]:text-foreground-inverted data-[range-end=true]:bg-background-inverted data-[range-end=true]:text-foreground-inverted group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 gap-bff data-[range-end=true]:rounded-compact data-[range-end=true]:rounded-r-compact data-[range-start=true]:rounded-compact data-[range-start=true]:rounded-l-compact flex aspect-square size-auto w-full min-w-(--cell-size) flex-col leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-middle=true]:rounded-none [&>span]:text-xs [&>span]:opacity-70',
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
			className={cx(
				'bg-background group/calendar p-best-friends [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
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
				root: cx('w-fit', defaultClassNames.root),
				months: cx(
					'gap-casual relative flex flex-col md:flex-row',
					defaultClassNames.months,
				),
				month: cx('gap-friends flex w-full flex-col', defaultClassNames.month),
				nav: cx(
					'gap-best-friends absolute inset-x-0 top-0 flex w-full items-center justify-between',
					defaultClassNames.nav,
				),
				button_previous: cx(
					buttonVariants({ variant: buttonVariant }),
					'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
					defaultClassNames.button_previous,
				),
				button_next: cx(
					buttonVariants({ variant: buttonVariant }),
					'size-(--cell-size) p-0 select-none aria-disabled:opacity-50',
					defaultClassNames.button_next,
				),
				month_caption: cx(
					'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
					defaultClassNames.month_caption,
				),
				dropdowns: cx(
					'gap-bff flex h-(--cell-size) w-full items-center justify-center text-sm font-medium',
					defaultClassNames.dropdowns,
				),
				dropdown_root: cx(
					'has-focus:border-ring border-input has-focus:ring-ring/50 rounded-compact relative border shadow-xs has-focus:ring-[3px]',
					defaultClassNames.dropdown_root,
				),
				dropdown: cx(
					'bg-popover absolute inset-0 opacity-0',
					defaultClassNames.dropdown,
				),
				caption_label: cx(
					'font-medium select-none',
					captionLayout === 'label'
						? 'text-sm'
						: '[&>svg]:text-foreground-muted gap-bff rounded-compact flex h-8 items-center pr-1 pl-2 text-sm [&>svg]:size-3.5',
					defaultClassNames.caption_label,
				),
				table: 'w-full border-collapse',
				weekdays: cx('gap-bff flex', defaultClassNames.weekdays),
				weekday: cx(
					'text-foreground-muted rounded-compact flex-1 text-[0.8rem] font-normal select-none',
					defaultClassNames.weekday,
				),
				week: cx('mt-best-friends gap-bff flex w-full', defaultClassNames.week),
				week_number_header: cx(
					'w-(--cell-size) select-none',
					defaultClassNames.week_number_header,
				),
				week_number: cx(
					'text-foreground-muted text-[0.8rem] select-none',
					defaultClassNames.week_number,
				),
				day: cx(
					'group/day data-[selected]:rounded-r-compact aspect-square h-full w-full p-0 text-center select-none',
					defaultClassNames.day,
				),
				range_start: cx(
					'bg-background-muted rounded-l-compact',
					defaultClassNames.range_start,
				),
				range_middle: cx(
					'relative rounded-none before:absolute',
					'before:content-[" "] before:bg-background-secondary before:-inset-x-bff before:absolute before:inset-y-0 before:z-[0]',
					defaultClassNames.range_middle,
				),
				range_end: cx(
					'bg-background-muted rounded-r-compact',
					defaultClassNames.range_end,
				),
				today: cx(
					'bg-background-muted text-foreground rounded-compact',
					defaultClassNames.today,
				),
				outside: cx(
					defaultClassNames.outside,
					'text-foreground-muted/70 aria-selected:text-foreground-muted/50',
				),
				disabled: cx(
					'text-foreground-muted opacity-50',
					defaultClassNames.disabled,
				),
				hidden: cx('invisible', defaultClassNames.hidden),
				...classNames,
			}}
			components={{
				Root: ({ className: cn, ...rest }) => {
					return <div data-slot="calendar" className={cn} {...rest} />
				},
				Chevron: ({ className: cn, orientation, ...rest }) => {
					if (orientation === 'left') {
						return <ChevronLeftIcon className={cx('size-4', cn)} {...rest} />
					}

					if (orientation === 'right') {
						return <ChevronRightIcon className={cx('size-4', cn)} {...rest} />
					}

					return <ChevronDownIcon className={cx('size-4', cn)} {...rest} />
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
