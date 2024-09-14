'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { useDateSegment } from 'react-aria'
import {
	type DateFieldState,
	type DateSegment as IDateSegment,
} from 'react-stately'

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
				'focus:bg-inverted/10 focus:rounded-md focus:outline-none',
				segment.type !== 'literal' ? 'px-[1px]' : '',
				segment.isPlaceholder ? 'text-muted/50' : '',
			)}
		>
			{segment.text}
		</div>
	)
}
