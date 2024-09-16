'use client'

import { Badge, Indicator, IndicatorItem } from '@nerdfish/ui'

export function IndicatorItemDemo() {
	return (
		<Indicator>
			<IndicatorItem>
				<Badge>99+</Badge>
			</IndicatorItem>
			<div className="bg-muted grid size-32 place-items-center">content</div>
		</Indicator>
	)
}
