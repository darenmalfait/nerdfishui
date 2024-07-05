'use client'

import { Steps } from '@nerdfish/ui'

export function StepsDemo() {
	return (
		<div className="w-full">
			<Steps currentStep={1} maxSteps={2} />
		</div>
	)
}
