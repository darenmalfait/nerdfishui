'use client'

import { Badge } from '@nerdfish/react/badge'

export function BadgeDisabledExample() {
	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex items-center gap-4">
				<Badge variant="default" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="default" disabled>
					Solid
				</Badge>
				<Badge variant="default" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="default" appearance="outline" disabled>
					outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="muted" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="muted" disabled>
					Solid
				</Badge>
				<Badge variant="muted" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="muted" appearance="outline" disabled>
					outline
				</Badge>
			</div>

			<div className="flex items-center gap-4">
				<Badge variant="success" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="success" disabled>
					Solid
				</Badge>
				<Badge variant="success" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="success" appearance="outline" disabled>
					outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="info" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="info" disabled>
					Solid
				</Badge>
				<Badge variant="info" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="info" appearance="outline" disabled>
					outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="warning" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="warning" disabled>
					Solid
				</Badge>
				<Badge variant="warning" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="warning" appearance="outline" disabled>
					outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="destructive" appearance="ghost" disabled>
					Ghost
				</Badge>
				<Badge variant="destructive" disabled>
					Solid
				</Badge>
				<Badge variant="destructive" appearance="muted" disabled>
					muted
				</Badge>
				<Badge variant="destructive" appearance="outline" disabled>
					outline
				</Badge>
			</div>
		</div>
	)
}
