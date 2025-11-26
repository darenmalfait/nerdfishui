'use client'

import { useRender } from '@base-ui-components/react'
import { cn } from '@nerdfish/utils/class'
import { addDays, format, isSameDay, isToday } from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import {
	type ComponentProps,
	createContext,
	type HTMLAttributes,
	type MouseEventHandler,
	type ReactNode,
	useCallback,
	useContext,
	useMemo,
} from 'react'
import { useControllableState } from '../../hooks/use-controllable-state'
import { Button } from '../button/button'

// Context for sharing state between components
type CalendarMiniContextType = {
	selectedDate: Date | null | undefined
	onDateSelect: (date: Date) => void
	startDate: Date
	onNavigate: (direction: 'prev' | 'next') => void
	days: number
}

const CalendarMiniContext = createContext<CalendarMiniContextType | null>(null)

function useCalendarMini() {
	const context = useContext(CalendarMiniContext)

	if (!context) {
		throw new Error('CalendarMini components must be used within CalendarMini')
	}

	return context
}

// Helper function to get array of consecutive dates
function getDays(startDate: Date, count: number): Date[] {
	const days: Date[] = []
	for (let i = 0; i < count; i++) {
		days.push(addDays(startDate, i))
	}
	return days
}

// Helper function to format date
function formatDate(date: Date) {
	const month = format(date, 'MMM')
	const day = format(date, 'd')

	return { month, day }
}

export type CalendarMiniProps = ComponentProps<'div'> & {
	value?: Date
	defaultValue?: Date
	onValueChange?: (date: Date | undefined) => void
	startDate?: Date
	defaultStartDate?: Date
	onStartDateChange?: (date: Date | undefined) => void
	days?: number
}

export function CalendarMini({
	value,
	defaultValue,
	onValueChange,
	startDate,
	defaultStartDate = new Date(),
	onStartDateChange,
	days = 5,
	className,
	children,
	...props
}: CalendarMiniProps) {
	const [selectedDate, setSelectedDate] = useControllableState<
		Date | undefined
	>({
		prop: value,
		defaultProp: defaultValue,
		onChange: onValueChange,
	})

	const [currentStartDate, setCurrentStartDate] = useControllableState({
		prop: startDate,
		defaultProp: defaultStartDate,
		onChange: onStartDateChange,
	})

	const handleDateSelect = useCallback(
		(date: Date) => setSelectedDate(date),
		[setSelectedDate],
	)

	const handleNavigate = useCallback(
		(direction: 'prev' | 'next') => {
			const newStartDate = addDays(
				currentStartDate,
				direction === 'next' ? days : -days,
			)
			setCurrentStartDate(newStartDate)
		},
		[currentStartDate, days, setCurrentStartDate],
	)

	return (
		<CalendarMiniContext
			value={useMemo(() => {
				return {
					selectedDate: selectedDate ?? null,
					onDateSelect: handleDateSelect,
					startDate: currentStartDate,
					onNavigate: handleNavigate,
					days,
				}
			}, [
				selectedDate,
				handleDateSelect,
				currentStartDate,
				handleNavigate,
				days,
			])}
		>
			<div
				className={cn(
					'gap-best-friends rounded-base p-best-friends flex items-center border',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</CalendarMiniContext>
	)
}

export interface CalendarMiniNavigationProps
	extends useRender.ComponentProps<'button'> {
	direction: 'prev' | 'next'
}

export const CalendarMiniNavigation = ({
	direction,
	render = <Button icon type="button" variant="ghost" />,
	children,
	onClick,
	...props
}: CalendarMiniNavigationProps) => {
	const { onNavigate } = useCalendarMini()
	const Icon = direction === 'prev' ? ChevronLeftIcon : ChevronRightIcon

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		onNavigate(direction)
		onClick?.(event)
	}

	return useRender({
		render,
		props: {
			onClick: handleClick,
			'data-slot': 'calendar-mini-navigation',
			'data-direction': direction,
			...props,
			children: children ?? <Icon className="size-4" />,
		},
	})
}

export interface CalendarMiniDaysProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	children: (date: Date) => ReactNode
}
export function CalendarMiniDays({
	className,
	children,
	...props
}: CalendarMiniDaysProps) {
	const { startDate, days: dayCount } = useCalendarMini()
	const days = getDays(startDate, dayCount)

	return (
		<div className={cn('gap-bff flex items-center', className)} {...props}>
			{days.map((date) => children(date))}
		</div>
	)
}

export interface CalendarMiniDayProps extends ComponentProps<typeof Button> {
	date: Date
}
export function CalendarMiniDay({
	date,
	className,
	...props
}: CalendarMiniDayProps) {
	const { selectedDate, onDateSelect } = useCalendarMini()
	const { month, day } = formatDate(date)
	const isSelected = selectedDate && isSameDay(date, selectedDate)
	const isTodayDate = isToday(date)

	return (
		<Button
			className={cn(
				'p-best-friends h-auto min-w-[3rem] flex-col gap-0 text-xs',
				isTodayDate && !isSelected && 'bg-background-muted',
				className,
			)}
			data-slot="calendar-mini-day"
			data-selected={isSelected}
			data-today={isTodayDate}
			onClick={() => onDateSelect(date)}
			size="sm"
			type="button"
			variant={isSelected ? 'default' : 'ghost'}
			{...props}
		>
			<span
				className={cn(
					'text-foreground-muted text-[10px] font-medium',
					isSelected && 'text-foreground-inverted/70',
				)}
			>
				{month}
			</span>
			<span className="text-sm font-semibold">{day}</span>
		</Button>
	)
}
