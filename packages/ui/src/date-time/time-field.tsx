'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import {
	type AriaTimeFieldProps,
	type TimeValue,
	useLocale,
	useTimeField,
} from 'react-aria'
import { useTimeFieldState } from 'react-stately'
import { inputVariants, type InputProps } from '../input'
import { DateSegment } from './date-segment'

export const TimeField = React.forwardRef<
	HTMLDivElement,
	InputProps & AriaTimeFieldProps<TimeValue>
>(({ isDisabled, variant, inputSize, hourCycle = 24, ...props }, ref) => {
	const innerRef = React.useRef<HTMLDivElement>(null)
	React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

	const { locale } = useLocale()
	const state = useTimeFieldState({
		...props,
		hourCycle,
		locale,
	})
	const {
		fieldProps: { ...fieldProps },
	} = useTimeField(props, state, innerRef)

	return (
		<div
			{...fieldProps}
			ref={innerRef}
			className={cx(
				inputVariants({ inputSize, variant }),
				'flex w-full flex-1 flex-row',
			)}
		>
			{state.segments.map((segment, i) => (
				<DateSegment key={i} segment={segment} state={state} />
			))}
		</div>
	)
})
TimeField.displayName = 'TimeField'

export type TimeFieldProps = React.ComponentPropsWithoutRef<typeof TimeField>
