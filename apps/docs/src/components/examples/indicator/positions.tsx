'use client'

import { Badge, Indicator } from '@nerdfish/ui'

export function IndicatorPositionsDemo() {
	return (
		<Indicator>
			<Indicator.Item top left>
				<Badge>top left</Badge>
			</Indicator.Item>
			<Indicator.Item top center>
				<Badge>top center</Badge>
			</Indicator.Item>
			<Indicator.Item top right>
				<Badge>top right</Badge>
			</Indicator.Item>
			<Indicator.Item middle left>
				<Badge>middle left</Badge>
			</Indicator.Item>
			<Indicator.Item middle center>
				<Badge>middle center</Badge>
			</Indicator.Item>
			<Indicator.Item middle right>
				<Badge>middle right</Badge>
			</Indicator.Item>
			<Indicator.Item bottom left>
				<Badge>bottom left</Badge>
			</Indicator.Item>
			<Indicator.Item bottom center>
				<Badge>bottom center</Badge>
			</Indicator.Item>
			<Indicator.Item bottom right>
				<Badge>bottom right</Badge>
			</Indicator.Item>
			<div className="bg-muted grid size-64 place-items-center">content</div>
		</Indicator>
	)
}
