'use client'

import { Input } from '@nerdfish/ui'

export function InputError() {
	return (
		<div className="w-full space-y-2">
			<Input
				name="email-error"
				label="email"
				type="email"
				error="This is an error message."
				placeholder="Email"
			/>
		</div>
	)
}
