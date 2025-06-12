'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'

export function ButtonIconOnlyExample() {
	return (
		<Button icon>
			<Mail className="size-4" />
			<span className="sr-only">Mail</span>
		</Button>
	)
}
