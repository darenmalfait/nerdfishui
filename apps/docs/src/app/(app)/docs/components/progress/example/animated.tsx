'use client'

import { Progress } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export function ProgressAnimatedExample() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					return 0 // Reset for continuous loop
				}
				return prev + Math.random() * 2 + 0.5 // Random increment 0.5-2.5
			})
		}, 200)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className="w-full space-y-2 md:w-125">
			<h3 className="text-sm font-medium">Pulsing Animation</h3>
			<Progress
				value={progress}
				className="**:data-[slot=progress-indicator]:animate-pulse **:data-[slot=progress-indicator]:bg-purple-600"
			/>
			<div className="text-muted-foreground inline-flex items-center gap-2 text-xs">
				Processing data...
				<span>{Math.round(progress)}%</span>
			</div>
		</div>
	)
}
