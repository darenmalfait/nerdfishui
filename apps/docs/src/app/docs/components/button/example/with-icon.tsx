'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'

export function ButtonWithIconExample() {
	return (
		<Button>
			<Mail className="mr-2 size-4" /> Login with Email
		</Button>
	)
}
