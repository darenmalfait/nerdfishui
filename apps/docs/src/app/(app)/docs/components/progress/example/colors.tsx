'use client'

import { Progress, ProgressValue } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export function ProgressVariantsExample() {
	const [progress, setProgress] = useState(60)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(85), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="space-y-casual w-full md:w-[500px]">
			<div className="space-y-2">
				<h3 className="text-sm font-medium">Default</h3>
				<Progress value={progress}>
					<ProgressValue />
				</Progress>
			</div>

			<div className="space-y-2">
				<h3 className="text-sm font-medium">Green</h3>
				<Progress
					value={progress}
					className="[&_[data-slot=progress-indicator]]:bg-green-500"
				>
					<ProgressValue />
				</Progress>
			</div>

			<div className="space-y-2">
				<h3 className="text-sm font-medium">Yellow</h3>
				<Progress
					value={progress}
					className="[&_[data-slot=progress-indicator]]:bg-yellow-500"
				>
					<ProgressValue />
				</Progress>
			</div>

			<div className="space-y-2">
				<h3 className="text-sm font-medium">Destructive</h3>
				<Progress
					value={progress}
					className="[&_[data-slot=progress-indicator]]:bg-destructive"
				>
					<ProgressValue />
				</Progress>
			</div>
		</div>
	)
}
