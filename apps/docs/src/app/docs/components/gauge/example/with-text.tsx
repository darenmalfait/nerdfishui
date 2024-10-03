'use client'

import { Gauge, GaugeText } from '@nerdfish/ui'

export function GaugeWithTextExample() {
	return (
		<div className="flex flex-col gap-4">
			<Gauge variant="info" value={80}>
				<GaugeText />
			</Gauge>
		</div>
	)
}
