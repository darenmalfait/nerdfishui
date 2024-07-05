'use client'

import { Badge, Indicator } from '@nerdfish/ui'

export function IndicatorItemDemo() {
	return (
		<Indicator>
			<Indicator.Item>
				<Badge>99+</Badge>
			</Indicator.Item>
			<div className="bg-muted grid size-32 place-items-center">content</div>
		</Indicator>
	)
}
