'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { useDateSegment } from 'react-aria'
import {
	type DateSegment as TDateSegment,
	type DateFieldState,
	type DateSegment as IDateSegment,
} from 'react-stately'

export function formatTimeFieldSegments(
	segments: TDateSegment[],
): TDateSegment[] {
	const hourSegment = segments.find((segment) => segment.type === 'hour')
	const minuteSegment = segments.find((segment) => segment.type === 'minute')
	const periodSegment = segments.find((segment) => segment.type === 'dayPeriod')
	const separatorSegment = segments.find(
		(segment) => segment.type === 'literal' && segment.text === ':',
	)

	if (!hourSegment || !minuteSegment || !separatorSegment) {
		return []
	}

	const formattedHourSegment = {
		...hourSegment,
		text: hourSegment.text.padStart(2, '0'),
	}
	const formattedMinuteSegment = {
		...minuteSegment,
		text: minuteSegment.text.padStart(2, '0'),
	}

	const formattedSegments: TDateSegment[] = [
		formattedHourSegment,
		separatorSegment,
		formattedMinuteSegment,
	]

	if (periodSegment) {
		formattedSegments.push(periodSegment)
	}

	return formattedSegments
}

export function formatDateFieldSegments(
	segments: TDateSegment[],
	withTime = false,
): TDateSegment[] {
	const daySegment = segments.find((segment) => segment.type === 'day')
	const monthSegment = segments.find((segment) => segment.type === 'month')
	const yearSegment = segments.find((segment) => segment.type === 'year')
	const separatorSegment = segments.find(
		(segment) => segment.type === 'literal',
	)

	if (!daySegment || !monthSegment || !yearSegment || !separatorSegment) {
		return []
	}

	const formattedDaySegment = {
		...daySegment,
		text: daySegment.text.padStart(2, '0'),
	}
	const formattedMonthSegment = {
		...monthSegment,
		text: monthSegment.text.padStart(2, '0'),
	}
	const formattedSeparatorSegment = { ...separatorSegment, text: '/' }

	return [
		formattedMonthSegment,
		formattedSeparatorSegment,
		formattedDaySegment,
		formattedSeparatorSegment,
		yearSegment,
		...(withTime
			? [
					{ ...separatorSegment, text: ', ' },
					...formatTimeFieldSegments(segments),
				]
			: []),
	]
}
interface DateSegmentProps {
	segment: IDateSegment
	state: DateFieldState
}

export function DateSegment({ segment, state }: DateSegmentProps) {
	const ref = React.useRef(null)

	const {
		segmentProps: { ...segmentProps },
	} = useDateSegment(segment, state, ref)

	return (
		<div
			{...segmentProps}
			ref={ref}
			className={cx(
				'focus:bg-inverted/10 focus:rounded-lg focus:outline-none',
				segment.type !== 'literal' ? 'px-[1px]' : '',
				segment.isPlaceholder ? 'text-muted/50' : '',
			)}
		>
			{segment.text}
		</div>
	)
}
