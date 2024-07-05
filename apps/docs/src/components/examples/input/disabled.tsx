'use client'

import { Input } from '@nerdfish/ui'
import * as React from 'react'

export function InputDisabled() {
	return (
		<Input
			disabled
			name="email"
			label="email"
			description="your login name"
			type="email"
			placeholder="Email"
		/>
	)
}
