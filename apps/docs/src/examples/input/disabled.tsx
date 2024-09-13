'use client'

import { Input } from '@nerdfish/ui'

export function InputDisabled() {
	return (
		<Input
			disabled
			name="email"
			label="email"
			description="your login name"
			type="email"
			placeholder="Email"
		/>
	)
}
