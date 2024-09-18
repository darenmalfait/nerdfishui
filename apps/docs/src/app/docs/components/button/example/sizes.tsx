'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'

export function ButtonSizesExample() {
	return (
		<div className="flex items-center space-x-2">
			<Button variant="accent" size="default">
				Default
			</Button>
			<Button variant="accent" size="sm">
				Small
			</Button>
			<Button variant="accent" size="lg">
				Large
			</Button>
			<Button variant="accent" size="xl">
				Extra Large
			</Button>
			<Button variant="accent" size="icon">
				<Mail className="size-4" />
				<span className="sr-only">Mail</span>
			</Button>
		</div>
	)
}
