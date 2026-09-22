'use client'

import { Input } from '@nerdfish/react/input'

export default function InputExample() {
	return (
		<Input
			type="email"
			placeholder="Email"
			className="w-sm max-w-[calc(100vw-3rem)]"
		/>
	)
}
