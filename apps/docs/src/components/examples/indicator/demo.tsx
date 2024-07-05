'use client'

import { Indicator } from '@nerdfish/ui'
import * as React from 'react'

export function IndicatorDemo() {
	return (
		<Indicator>
			<Indicator.Item>
				<div className="size-4 rounded-full bg-pink-500" />
			</Indicator.Item>
			<div className="bg-muted grid size-32 place-items-center">content</div>
		</Indicator>
	)
}
