'use client'

import { Input } from '@nerdfish/ui'
import { CheckCircle } from 'lucide-react'
import * as React from 'react'

export function InputIcon() {
	return (
		<div className="w-full space-y-2">
			<Input
				name="input-icon"
				icon={CheckCircle}
				label="email"
				type="email"
				placeholder="Email"
			/>
		</div>
	)
}
