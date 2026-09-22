'use client'

import { Slider } from '@nerdfish/react/slider'

export default function SliderVerticalExample() {
	return (
		<div className="w-xs max-w-[calc(100vw-3rem)] *:not-first:mt-4">
			<div className="flex h-40 justify-center">
				<Slider
					defaultValue={[2, 7]}
					max={10}
					orientation="vertical"
					aria-label="Vertical slider"
					showTooltip={true}
					tooltipContent={(value) => `Value: ${value}`}
					tooltipVariant="light"
				/>
			</div>
		</div>
	)
}
