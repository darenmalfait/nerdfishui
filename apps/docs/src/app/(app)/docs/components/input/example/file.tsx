'use client'

import { Input } from '@nerdfish/react/input'

export function InputFileExample() {
	return (
		<div className="grid w-full items-center gap-3">
			<label htmlFor="picture">Picture</label>
			<Input id="picture" type="file" />
		</div>
	)
}
