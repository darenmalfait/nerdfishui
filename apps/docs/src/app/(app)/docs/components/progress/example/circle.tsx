'use client'

import { ProgressCircle } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

export function ProgressCircleExample() {
	const [cpuUsage, setCpuUsage] = useState(0)

	useEffect(() => {
		// CPU usage simulation
		const cpuTimer = setInterval(() => {
			setCpuUsage((prev) => {
				const target =
					30 + Math.sin(Date.now() / 3000) * 20 + Math.random() * 15
				return prev + (target - prev) * 0.1
			})
		}, 100)

		return () => {
			clearInterval(cpuTimer)
		}
	}, [])

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col items-center gap-3">
				<ProgressCircle
					value={cpuUsage}
					size={80}
					strokeWidth={6}
					className="text-info-background"
					indicatorClassName="text-info"
				>
					<div className="text-info text-center">
						<div className="text-base font-bold">{Math.round(cpuUsage)}%</div>
						<div className="text-muted-foreground text-xs">CPU</div>
					</div>
				</ProgressCircle>
				<span className="text-muted-foreground text-xs">Processor Usage</span>
			</div>
		</div>
	)
}
