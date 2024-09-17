'use client'

import { Button } from '@nerdfish/ui'

export function ButtonVariants() {
	return (
		<div className="flex space-x-2">
			<Button variant="default">Default</Button>
			<Button variant="accent">Nerdfish</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="danger" onClick={() => {}}>
				Danger
			</Button>
			<Button variant="success">Success</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}
