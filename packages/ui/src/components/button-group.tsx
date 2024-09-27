'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { type ButtonProps } from './button'

export const ButtonGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'> & {
		className?: string
		orientation?: 'horizontal' | 'vertical'
		children: React.ReactElement<ButtonProps>[]
	}
>(function ButtonGroup(
	{ className, orientation = 'horizontal', children },
	ref,
) {
	const isHorizontal = orientation === 'horizontal'
	const isVertical = orientation === 'vertical'

	return (
		<div
			ref={ref}
			className={cx(
				'flex',
				{
					'flex-col': isVertical,
					'w-fit': isVertical,
					'[&>*:not(:first-child)]:rounded-l-none': isHorizontal,
					'[&>*:not(:last-child)]:rounded-r-none': isHorizontal,
					'[&>*:not(:first-child)]:rounded-t-none': isVertical,
					'[&>*:not(:last-child)]:rounded-b-none': isVertical,
				},
				className,
			)}
		>
			{children}
		</div>
	)
})
ButtonGroup.displayName = 'ButtonGroup'

export type ButtonGroupProps = React.ComponentPropsWithoutRef<
	typeof ButtonGroup
>
