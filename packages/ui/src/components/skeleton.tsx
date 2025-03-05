'use client'

import { cx } from '@nerdfish/utils'
import type * as React from 'react'

export function Skeleton({
	className,
	count = 1,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	count?: number
}) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<span
					{...props}
					key={index}
					className={cx(
						'bg-foreground/10 inline-block h-[1lh] w-full animate-pulse rounded-lg text-inherit',
						className,
					)}
				/>
			))}
		</>
	)
}
