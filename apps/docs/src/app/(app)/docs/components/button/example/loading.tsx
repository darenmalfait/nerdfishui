'use client'

import { Button } from '@nerdfish/react/button'
import { Loader2 } from 'lucide-react'

export function ButtonLoadingExample() {
	return (
		<Button disabled>
			<Loader2 className="mr-best-friends size-4 animate-spin" />
			Please wait
		</Button>
	)
}
