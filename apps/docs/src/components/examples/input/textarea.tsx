'use client'

import { Input } from '@nerdfish/ui'
import * as React from 'react'

export function InputTextArea() {
	return (
		<div className="w-full space-y-2">
			<Input
				name="input-textarea"
				label="message"
				type="textarea"
				placeholder="message"
			/>
		</div>
	)
}
