'use client'

import { Button } from '@nerdfish/react/button'
import { Mail } from 'lucide-react'

export function ButtonIconOnlyExample() {
	return (
		<Button icon>
			<Mail className="size-4" />
			<span className="sr-only">Mail</span>
		</Button>
	)
}
