'use client'

import { Progress } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

import { type Easing } from '../types'

function EasingRow({ easing, value }: { easing: Easing; value: number }) {
	return (
		<div className="flex flex-col">
			<div className="mb-best-friends gap-friends flex items-center justify-between">
				<span className="text-foreground-muted typography-body text-sm">
					{easing.value}
				</span>
				<span className="text-foreground-muted text-right text-sm">
					{easing.name}
				</span>
			</div>
			<Progress value={value} className={easing.className} />
		</div>
	)
}

export function EasingShowcase({ easings }: { easings: Easing[] }) {
	const [value, setValue] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setValue(100)
		}, 100)

		const interval = setInterval(() => {
			setValue((current) => (current === 0 ? 100 : 0))
		}, 2800)

		return () => {
			clearTimeout(timeout)
			clearInterval(interval)
		}
	}, [])

	return (
		<div className="gap-casual flex flex-col">
			{easings.map((easing) => (
				<EasingRow key={easing.name} easing={easing} value={value} />
			))}
		</div>
	)
}
