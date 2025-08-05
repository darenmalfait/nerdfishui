'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { type ButtonProps } from './button'

export interface ButtonGroupProps extends React.ComponentProps<'div'> {
	orientation?: 'horizontal' | 'vertical'
	children: React.ReactElement<ButtonProps>[]
}
export function ButtonGroup({
	className,
	orientation = 'horizontal',
	children,
	...props
}: ButtonGroupProps) {
	const isHorizontal = orientation === 'horizontal'
	const isVertical = orientation === 'vertical'

	return (
		<div
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
			{...props}
		>
			{children}
		</div>
	)
}
