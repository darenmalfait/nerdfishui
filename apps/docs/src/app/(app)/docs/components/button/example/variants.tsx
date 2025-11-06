'use client'

import { Button } from '@nerdfish/react/button'

export function ButtonVariantsExample() {
	return (
		<div className="space-y-friends flex flex-col">
			<Button variant="default">Default</Button>
			<Button variant="accent">Nerdfish</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="destructive" onClick={() => {}}>
				Danger
			</Button>
			<Button variant="success">Success</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}
