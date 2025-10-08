'use client'

import { Progress, ProgressValue } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export function ProgressSizesExample() {
	const [progress, setProgress] = useState(45)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(75), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="space-y-casual w-full md:w-[500px]">
			<div className="space-y-2">
				<h3 className="text-sm font-medium">Small</h3>
				<Progress value={progress} className="h-1">
					<ProgressValue />
				</Progress>
			</div>

			<div className="space-y-2">
				<h3 className="text-sm font-medium">Medium (Default)</h3>
				<Progress value={progress}>
					<ProgressValue />
				</Progress>
			</div>

			<div className="space-y-2">
				<h3 className="text-sm font-medium">Large</h3>
				<Progress value={progress} className="h-3">
					<ProgressValue />
				</Progress>
			</div>
		</div>
	)
}
