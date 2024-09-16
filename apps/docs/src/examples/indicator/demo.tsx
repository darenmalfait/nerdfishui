'use client'

import { Indicator, IndicatorItem } from '@nerdfish/ui'

export function IndicatorDemo() {
	return (
		<Indicator>
			<IndicatorItem>
				<div className="size-4 rounded-full bg-pink-500" />
			</IndicatorItem>
			<div className="bg-muted grid size-32 place-items-center">content</div>
		</Indicator>
	)
}
