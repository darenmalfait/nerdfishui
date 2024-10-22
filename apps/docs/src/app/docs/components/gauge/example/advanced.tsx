'use client'

import { Gauge, GaugeText, Slider, SliderThumb } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function GaugeAdvancedExample() {
	const [value, setValue] = React.useState([0])

	const gaugeValue = value[0] ?? 0

	return (
		<div className="gap-lg flex flex-col">
			<Slider min={0} max={100} value={value} onValueChange={setValue}>
				<SliderThumb />
			</Slider>

			<Gauge
				variant="info"
				value={gaugeValue}
				className={cx(
					'[&>[data-slot=secondary]]:stroke-muted/20 [&>[data-slot=text]]:text-primary',
					{
						'text-blue-500': gaugeValue < 25,
						'text-green-500': gaugeValue >= 25 && gaugeValue < 50,
						'text-yellow-500': gaugeValue >= 50 && gaugeValue < 75,
						'text-red-500': gaugeValue >= 75,
					},
				)}
			>
				<GaugeText fontSize={24} value={`${gaugeValue}%`} />
			</Gauge>
		</div>
	)
}
