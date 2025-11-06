'use client'

import { Input } from '@nerdfish/react/input'

export function InputSizeExample() {
	return (
		<div className="space-y-friends flex flex-col">
			<Input type="email" placeholder="Email" size="xs" />
			<Input type="email" placeholder="Email" size="sm" />
			<Input type="email" placeholder="Email" size="md" />
			<Input type="email" placeholder="Email" size="lg" />
			<Input type="email" placeholder="Email" size="xl" />
		</div>
	)
}
