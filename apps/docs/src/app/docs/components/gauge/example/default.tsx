'use client'

import { Gauge, GaugeText } from '@nerdfish/ui'

export function GaugeExample() {
	return (
		<Gauge value={80}>
			<GaugeText />
		</Gauge>
	)
}
