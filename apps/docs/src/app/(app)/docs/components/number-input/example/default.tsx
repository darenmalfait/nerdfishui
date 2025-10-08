'use client'

import { NumberInput, NumberInputScrubArea } from '@nerdfish/react/number-input'

export function NumberInputExample() {
	return (
		<div className="space-y-friends">
			<NumberInput className="mx-auto" defaultValue={5} min={0} max={100}>
				<NumberInputScrubArea>Amount</NumberInputScrubArea>
			</NumberInput>
		</div>
	)
}
