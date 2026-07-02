'use client'

import { Progress } from '@nerdfish/react/progress'
import { useEffect, useState } from 'react'

import { type Duration, type DurationGroup } from '../types'

function DurationRow({
	duration,
	value,
}: {
	duration: Duration
	value: number
}) {
	return (
		<div className="flex flex-col">
			<div className="mb-best-friends gap-friends flex items-center justify-between">
				<span className="typography-body tabular-nums">{duration.ms}</span>
				<span className="text-foreground-muted text-right text-sm">
					{duration.name}
				</span>
			</div>
			<Progress value={value} className={duration.className} />
		</div>
	)
}

export function DurationShowcase({ groups }: { groups: DurationGroup[] }) {
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
		<div className="gap-acquaintances flex flex-col">
			{groups.map((group) => (
				<section key={group.title} className="flex flex-col">
					<h2 className="typography-title mb-best-friends">{group.title}</h2>
					{group.description ? (
						<p className="typography-body text-foreground-muted mb-friends">
							{group.description}
						</p>
					) : null}
					<div className="gap-casual flex flex-col">
						{group.durations.map((duration) => (
							<DurationRow
								key={duration.name}
								duration={duration}
								value={value}
							/>
						))}
					</div>
				</section>
			))}
		</div>
	)
}
