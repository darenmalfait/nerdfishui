'use client'

import { Progress, ProgressValue } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export default function ProgressExample() {
	const [progress, setProgress] = useState(13)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="w-125 max-w-[calc(100vw-3rem)]">
			<Progress value={progress}>
				<ProgressValue />
			</Progress>
		</div>
	)
}
