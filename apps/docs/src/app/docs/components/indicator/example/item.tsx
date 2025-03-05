'use client'

import { Badge, Indicator, IndicatorItem } from '@nerdfish/ui'

export function IndicatorItemExample() {
	return (
		<Indicator>
			<IndicatorItem>
				<Badge>99+</Badge>
			</IndicatorItem>
			<div className="bg-background-muted grid size-32 place-items-center">
				content
			</div>
		</Indicator>
	)
}
