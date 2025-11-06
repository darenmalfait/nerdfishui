'use client'

import { Label } from '@nerdfish/react/label'
import { Slider, SliderThumb } from '@nerdfish/react/slider'
import { cx } from '@nerdfish/utils'

export function SliderTicksExample() {
	const max = 12
	const skipInterval = 2 // Set to 1 to allow no text skipping
	const ticks = [...Array(max + 1)].map((_, i) => i)

	return (
		<div className="w-full max-w-xs *:not-first:mt-4">
			<Label>Slider with ticks</Label>
			<div>
				<Slider defaultValue={[5]} max={max} aria-label="Slider with ticks">
					<SliderThumb />
				</Slider>
				<span
					className="text-foreground-muted gap-1.125 mt-3 flex w-full items-center justify-between px-0.5 text-xs font-medium"
					aria-hidden="true"
				>
					{ticks.map((_, i) => (
						<span
							key={i}
							className="flex w-0 flex-col items-center justify-center gap-2"
						>
							<span
								className={cx(
									'bg-foreground-muted h-1 w-px',
									i % skipInterval !== 0 && 'h-0.5',
								)}
							/>
							<span className={cx(i % skipInterval !== 0 && 'opacity-0')}>
								{i}
							</span>
						</span>
					))}
				</span>
			</div>
		</div>
	)
}
