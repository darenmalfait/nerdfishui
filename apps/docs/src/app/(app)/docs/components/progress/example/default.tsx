'use client'

import { Progress, ProgressValue } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export function ProgressExample() {
	const [progress, setProgress] = useState(13)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="w-full md:w-125">
			<Progress value={progress}>
				<ProgressValue />
			</Progress>
		</div>
	)
}
