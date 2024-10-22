'use client'

import { Gauge, GaugeText } from '@nerdfish/ui'

export function GaugeWithTextExample() {
	return (
		<div className="gap-md flex flex-col">
			<Gauge variant="info" value={80}>
				<GaugeText />
			</Gauge>
		</div>
	)
}
