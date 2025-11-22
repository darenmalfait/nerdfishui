'use client'

import { Skeleton } from '@nerdfish/react/skeleton'

export function SkeletonCardSimpleWithImageBlock() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<Skeleton className="h-48 w-full" />
			<Skeleton className="h-4 w-3/4" />
			<Skeleton className="h-4 w-1/2" />
		</div>
	)
}
