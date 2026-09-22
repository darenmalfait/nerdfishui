'use client'

import { Input } from '@nerdfish/react/input'

export default function InputFileExample() {
	return (
		<div className="grid w-sm max-w-[calc(100vw-3rem)] items-center gap-3">
			<label htmlFor="picture">Picture</label>
			<Input id="picture" type="file" />
		</div>
	)
}
