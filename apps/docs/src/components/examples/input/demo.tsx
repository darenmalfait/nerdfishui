'use client'

import { Input } from '@nerdfish/ui'
import * as React from 'react'

export function InputDemo() {
	return (
		<Input
			name="email"
			label="email"
			description="your login name"
			type="email"
			placeholder="Email"
		/>
	)
}
