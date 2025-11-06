'use client'

import { Badge, BadgeButton } from '@nerdfish/react/badge'
import { XIcon } from 'lucide-react'

export function BadgeRemoveButtonExample() {
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex items-center gap-4">
				<Badge variant="muted" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="muted">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="muted" appearance="muted">
					Light
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="default" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="default">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="default" appearance="muted">
					muted
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="default" appearance="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="success" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="success">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="success" appearance="muted">
					muted
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="success" appearance="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="info" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="info">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="info" appearance="muted">
					muted
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="info" appearance="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="warning" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="warning">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="warning" appearance="muted">
					muted
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="warning" appearance="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="destructive" appearance="ghost">
					Ghost
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="destructive">
					Solid
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="destructive" appearance="muted">
					muted
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
				<Badge variant="destructive" appearance="outline">
					Outline
					<BadgeButton>
						<XIcon />
					</BadgeButton>
				</Badge>
			</div>
		</div>
	)
}
