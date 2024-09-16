'use client'

import { createCalendar } from '@internationalized/date'
import { cx } from '@nerdfish/utils'
import React from 'react'
import {
	useDateField,
	useLocale,
	type AriaDateFieldProps,
	type DateValue,
} from 'react-aria'
import { useDateFieldState } from 'react-stately'

import { inputVariants, type InputProps } from '../input'
import { DateSegment, formatDateFieldSegments } from './date-segment'

export const DateField = React.forwardRef<
	HTMLDivElement,
	Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> &
		AriaDateFieldProps<DateValue> & {
			withTime?: boolean
			childrenAfter?: React.ReactElement
		}
>(function DateField(
	{
		withTime,
		children,
		childrenAfter,
		className,
		inputSize,
		variant,
		hourCycle = 24,
		...dateFieldProps
	},
	ref,
) {
	const innerRef = React.useRef<HTMLDivElement>(null)
	React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

	const { locale } = useLocale()
	const state = useDateFieldState({
		...dateFieldProps,
		hourCycle,
		locale,
		createCalendar,
	})
	const { fieldProps } = useDateField(dateFieldProps, state, innerRef)
	const segments = React.useMemo(
		() => formatDateFieldSegments(state.segments, withTime),
		[state.segments, withTime],
	)

	return (
		<div
			{...fieldProps}
			ref={innerRef}
			className={cx(
				inputVariants({ inputSize, variant }),
				'flex w-full flex-1 flex-row',
			)}
		>
			{children}

			{segments.map((segment, i) => (
				<DateSegment key={i} segment={segment} state={state} />
			))}

			{childrenAfter}
		</div>
	)
})
