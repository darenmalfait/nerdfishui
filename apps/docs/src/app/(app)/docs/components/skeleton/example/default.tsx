'use client'

import { Card, CardContent } from '@nerdfish/react/card'
import { Skeleton } from '@nerdfish/react/skeleton'

export function SkeletonExample() {
	return (
		<Card className="space-y-friends w-[250px]">
			<CardContent>
				<Skeleton className="!rounded-[calc(theme(borderRadius.base)-theme(padding.sm))] h-24" />
				<Skeleton className="h-3 w-3/5" />
				<Skeleton count={2} className="h-3 w-4/5" />
			</CardContent>
		</Card>
	)
}
