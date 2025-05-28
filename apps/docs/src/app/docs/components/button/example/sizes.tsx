'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'

export function ButtonSizesExample() {
	return (
		<div className="space-x-sm flex items-center">
			<Button variant="accent" size="xs">
				Small
			</Button>
			<Button variant="accent" size="default">
				Default
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
			<Button variant="accent" size="iconSm">
				<Mail className="size-4" />
				<span className="sr-only">Mail</span>
			</Button>
		</div>
	)
}
