'use client'

import { Bubble, BubbleContent } from '@nerdfish/react/bubble'

const variants = [
	'default',
	'secondary',
	'muted',
	'tinted',
	'outline',
	'ghost',
	'destructive',
] as const

export function BubbleExample() {
	return (
		<div className="gap-best-friends py-casual mx-auto flex w-full max-w-sm flex-col">
			{variants.map((variant) => (
				<Bubble key={variant} variant={variant}>
					<BubbleContent className="capitalize">{variant} bubble</BubbleContent>
				</Bubble>
			))}
		</div>
	)
}
