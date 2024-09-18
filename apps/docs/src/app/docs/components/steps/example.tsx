'use client'

import { Steps } from '@nerdfish/ui'

export function StepsExample() {
	return (
		<div className="w-full">
			<Steps currentStep={1} maxSteps={2} />
		</div>
	)
}
