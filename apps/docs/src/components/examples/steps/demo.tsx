'use client'

import { Steps } from '@nerdfish/ui'
import * as React from 'react'

export function StepsDemo() {
	return (
		<div className="w-full">
			<Steps currentStep={1} maxSteps={2} />
		</div>
	)
}
