'use client'

import { NumberInput, NumberInputScrubArea } from '@nerdfish/react/number-input'

export function NumberInputSizeExample() {
	return (
		<div className="space-y-friends">
			<NumberInput
				size="xs"
				className="mx-auto"
				defaultValue={5}
				min={0}
				max={100}
			>
				<NumberInputScrubArea>Extra Small</NumberInputScrubArea>
			</NumberInput>
			<NumberInput
				size="sm"
				className="mx-auto"
				defaultValue={5}
				min={0}
				max={100}
			>
				<NumberInputScrubArea>Small</NumberInputScrubArea>
			</NumberInput>
			<NumberInput
				size="md"
				className="mx-auto"
				defaultValue={5}
				min={0}
				max={100}
			>
				<NumberInputScrubArea>Medium</NumberInputScrubArea>
			</NumberInput>
			<NumberInput
				size="lg"
				className="mx-auto"
				defaultValue={5}
				min={0}
				max={100}
			>
				<NumberInputScrubArea>Large</NumberInputScrubArea>
			</NumberInput>
			<NumberInput
				size="xl"
				className="mx-auto"
				defaultValue={5}
				min={0}
				max={100}
			>
				<NumberInputScrubArea>Extra Large</NumberInputScrubArea>
			</NumberInput>
		</div>
	)
}
