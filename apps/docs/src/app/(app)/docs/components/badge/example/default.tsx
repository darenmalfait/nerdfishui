'use client'

import { Badge } from '@nerdfish/react/badge'

export function BadgeExample() {
	return (
		<div className="flex items-center gap-4">
			<Badge>Badge</Badge>
			<Badge variant="muted">Muted</Badge>
			<Badge variant="outline">Outline</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="info">Info</Badge>
		</div>
	)
}
