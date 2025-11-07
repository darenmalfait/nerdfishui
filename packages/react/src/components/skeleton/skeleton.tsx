'use client'

import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export interface SkeletonProps extends ComponentProps<'span'> {
	count?: number
}
export function Skeleton({ className, count = 1, ...props }: SkeletonProps) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<span
					{...props}
					key={index}
					className={cx(
						'bg-background-inverted/10 rounded-base inline-block h-lh w-full animate-pulse text-inherit',
						className,
					)}
				/>
			))}
		</>
	)
}
