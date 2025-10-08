'use client'

import { Badge } from '@nerdfish/react/badge'

export function BadgeSizeExample() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="flex items-center gap-4">
				<Badge variant="default" size="xs">
					Xsmall
				</Badge>
				<Badge variant="default" size="sm">
					Small
				</Badge>
				<Badge variant="default">Medium</Badge>
				<Badge variant="default" size="lg">
					Large
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="default" shape="circle" size="xs">
					5
				</Badge>
				<Badge variant="default" shape="circle" size="sm">
					5
				</Badge>
				<Badge variant="default" shape="circle">
					5
				</Badge>
				<Badge variant="default" shape="circle" size="lg">
					5
				</Badge>
			</div>
		</div>
	)
}
