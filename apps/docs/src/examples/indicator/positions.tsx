'use client'

import { Badge, Indicator, IndicatorItem } from '@nerdfish/ui'

export function IndicatorPositionsDemo() {
	return (
		<Indicator>
			<IndicatorItem top left>
				<Badge>top left</Badge>
			</IndicatorItem>
			<IndicatorItem top center>
				<Badge>top center</Badge>
			</IndicatorItem>
			<IndicatorItem top right>
				<Badge>top right</Badge>
			</IndicatorItem>
			<IndicatorItem middle left>
				<Badge>middle left</Badge>
			</IndicatorItem>
			<IndicatorItem middle center>
				<Badge>middle center</Badge>
			</IndicatorItem>
			<IndicatorItem middle right>
				<Badge>middle right</Badge>
			</IndicatorItem>
			<IndicatorItem bottom left>
				<Badge>bottom left</Badge>
			</IndicatorItem>
			<IndicatorItem bottom center>
				<Badge>bottom center</Badge>
			</IndicatorItem>
			<IndicatorItem bottom right>
				<Badge>bottom right</Badge>
			</IndicatorItem>
			<div className="bg-muted grid size-64 place-items-center">content</div>
		</Indicator>
	)
}
