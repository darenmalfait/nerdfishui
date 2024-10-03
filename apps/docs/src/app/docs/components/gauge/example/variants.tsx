'use client'

import { Gauge } from '@nerdfish/ui'

export function GaugeVariantsExample() {
	return (
		<div className="flex flex-col gap-4">
			<Gauge value={80} variant="default" />
			<Gauge value={80} variant="info" />
			<Gauge value={80} variant="success" />
			<Gauge value={80} variant="warning" />
			<Gauge value={80} variant="danger" />
		</div>
	)
}
