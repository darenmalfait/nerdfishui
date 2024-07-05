import { cx } from '@nerdfish/utils'
import * as React from 'react'

import { Card } from './card'

export function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cx('bg-inverted/10 animate-pulse rounded-md', className)}
			{...props}
		/>
	)
}

export function CardSkeleton({ className }: { className?: string }) {
	return (
		<Card className={className}>
			<Card.Header className="flex flex-col gap-2">
				<Skeleton className="h-5 w-1/5" />
				<Skeleton className="h-4 w-4/5" />
			</Card.Header>
			<Card.Content className="h-10" />
			<Card.Footer>
				<Skeleton className="h-8 w-[120px]" />
			</Card.Footer>
		</Card>
	)
}

export function H1Skeleton({ className }: { className?: string }) {
	return <Skeleton className={cx('h-12 w-1/3 rounded-lg', className)} />
}

export function H2Skeleton({ className }: { className?: string }) {
	return <Skeleton className={cx('h-10 w-1/3 rounded-lg', className)} />
}

export function ButtonSkeleton({ className }: { className?: string }) {
	return <Skeleton className={cx('h-4 w-16 rounded-lg', className)} />
}
