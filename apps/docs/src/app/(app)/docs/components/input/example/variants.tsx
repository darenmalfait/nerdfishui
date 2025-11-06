'use client'

import { Input } from '@nerdfish/react/input'

export function InputVariantsExample() {
	return (
		<div className="space-y-friends flex flex-col">
			<Input type="email" placeholder="Email" variant="default" />
			<Input type="email" placeholder="Email" variant="bordered" />
		</div>
	)
}
