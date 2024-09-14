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
import { Field, type FieldProps } from '../field'
import { getInputClassName, type InputRootProps } from '../input'
import { DateSegment } from './date-segment'

export const TimeFieldRoot = React.forwardRef<
	HTMLDivElement,
	InputRootProps & AriaTimeFieldProps<TimeValue>
>(({ hasError, isDisabled, inputSize, hourCycle = 24, ...props }, ref) => {
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
				getInputClassName('', hasError, inputSize),
				'flex w-full flex-1 flex-row',
			)}
		>
			{state.segments.map((segment, i) => (
				<DateSegment key={i} segment={segment} state={state} />
			))}
		</div>
	)
})

TimeFieldRoot.displayName = 'TimeFieldRoot'

export const TimeField = React.forwardRef<
	HTMLDivElement,
	TimeFieldRootProps & FieldProps
>(({ label, error, id, name, description, htmlFor, ...props }, ref) => {
	const inputId = id ?? name
	const errorId = `${inputId}-error`
	const descriptionId = `${inputId}-description`

	return (
		<Field
			{...{
				description,
				descriptionId,
				error,
				errorId,
				htmlFor: inputId,
				label,
			}}
		>
			<TimeFieldRoot
				name={name}
				id={inputId}
				{...props}
				ref={ref}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
			/>
		</Field>
	)
})

TimeField.displayName = 'TimeField'

export type TimeFieldRootProps = React.ComponentPropsWithoutRef<
	typeof TimeFieldRoot
>
