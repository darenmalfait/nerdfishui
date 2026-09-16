'use client'

import { Input } from '@nerdfish/react/input'

export default function InputVariantsExample() {
	return (
		<div className="space-y-friends flex flex-col">
			<Input type="email" placeholder="Email" variant="default" />
			<Input type="email" placeholder="Email" variant="bordered" />
		</div>
	)
}
