'use client'

import { Button } from '@nerdfish/ui'

export function ButtonDisabledExample() {
	return (
		<div className="space-x-sm flex">
			<Button disabled variant="default">
				Default
			</Button>
			<Button disabled variant="brand">
				Nerdfish
			</Button>
			<Button disabled variant="secondary">
				Secondary
			</Button>
			<Button disabled variant="danger">
				Danger
			</Button>
			<Button disabled variant="success">
				Success
			</Button>
			<Button disabled variant="ghost">
				Ghost
			</Button>
			<Button disabled variant="outline">
				Outline
			</Button>
			<Button disabled variant="link">
				Link
			</Button>
		</div>
	)
}
