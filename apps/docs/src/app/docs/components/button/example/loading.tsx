'use client'

import { Button } from '@nerdfish/ui'
import { Loader2 } from 'lucide-react'

export function ButtonLoadingExample() {
	return (
		<Button disabled>
			<Loader2 className="mr-sm size-4 animate-spin" />
			Please wait
		</Button>
	)
}
