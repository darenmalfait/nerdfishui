'use client'

import { Slider } from '@nerdfish/react/slider'

export function SliderTooltipExample() {
	return (
		<div className="w-full max-w-xs *:not-first:mt-4">
			<div>
				<span
					className="text-foreground-muted mb-friends gap-bff flex w-full items-center justify-between text-xs font-medium"
					aria-hidden="true"
				>
					<span>Low</span>
					<span>High</span>
				</span>
				<Slider
					defaultValue={[50]}
					step={10}
					showTooltip={true}
					aria-label="Slider with labels and tooltip"
				/>
			</div>
		</div>
	)
}
