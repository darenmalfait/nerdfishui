'use client'

import { Input } from '@nerdfish/react/input'

export default function InputDisabledExample() {
	return (
		<div className="space-y-friends flex w-sm max-w-[calc(100vw-3rem)] flex-col">
			<Input type="email" placeholder="Email" variant="default" disabled />
			<Input type="email" placeholder="Email" variant="bordered" disabled />
		</div>
	)
}
