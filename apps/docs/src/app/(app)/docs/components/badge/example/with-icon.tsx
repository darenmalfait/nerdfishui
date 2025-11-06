'use client'

import { Badge } from '@nerdfish/react/badge'
import { Activity, Mail, Tag } from 'lucide-react'

export function BadgeWithIconExample() {
	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex items-center gap-4">
				<Badge variant="default" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="default">
					<Mail /> Solid
				</Badge>
				<Badge variant="default" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="default" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="muted" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="muted">
					<Mail /> Solid
				</Badge>
				<Badge variant="muted" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="muted" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>

			<div className="flex items-center gap-4">
				<Badge variant="success" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="success">
					<Mail /> Solid
				</Badge>
				<Badge variant="success" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="success" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="info" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="info">
					<Mail /> Solid
				</Badge>
				<Badge variant="info" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="info" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="warning" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="warning">
					<Mail /> Solid
				</Badge>
				<Badge variant="warning" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="warning" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>
			<div className="flex items-center gap-4">
				<Badge variant="destructive" appearance="ghost">
					<Tag /> Ghost
				</Badge>
				<Badge variant="destructive">
					<Mail /> Solid
				</Badge>
				<Badge variant="destructive" appearance="muted">
					<Activity /> muted
				</Badge>
				<Badge variant="destructive" appearance="outline">
					<Tag /> outline
				</Badge>
			</div>
		</div>
	)
}
