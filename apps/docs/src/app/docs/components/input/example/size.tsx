'use client'

import { Input } from '@nerdfish/ui'

export function InputSizeExample() {
	return (
		<div className="w-full space-y-2">
			<Input
				name="input-size-1"
				type="email"
				placeholder="Email"
				inputSize="sm"
			/>
			<Input
				name="input-size-2"
				type="email"
				placeholder="Email"
				inputSize="md"
			/>
			<Input
				name="input-size-3"
				type="email"
				placeholder="Email"
				inputSize="lg"
			/>
		</div>
	)
}
