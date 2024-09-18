'use client'

import { Input } from '@nerdfish/ui'
import { CheckCircle } from 'lucide-react'

export function InputIconExample() {
	return (
		<div className="w-full space-y-2">
			<Input
				name="input-icon"
				icon={CheckCircle}
				type="email"
				placeholder="Email"
			/>
		</div>
	)
}
