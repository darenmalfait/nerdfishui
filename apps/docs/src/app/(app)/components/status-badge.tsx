import { Badge } from '@nerdfish/react/badge'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'

import { type ReactNode } from 'react'
import { type NavigationItem } from '@/nav'

type Status = Exclude<NavigationItem['status'], undefined>

const IconMap: {
	[key in Status]: ReactNode
} = {
	new: (
		<Badge size="xs" variant="success">
			New
		</Badge>
	),
	experimental: (
		<Badge size="xs" variant="warning" appearance="ghost">
			Experimental
		</Badge>
	),
	stable: '🔒',
	deprecated: (
		<Badge size="xs" variant="warning" appearance="outline">
			Deprecated
		</Badge>
	),
	'needs-update': (
		<Badge size="xs" variant="warning">
			Needs update
		</Badge>
	),
	updated: (
		<Badge size="xs" variant="info" appearance="outline">
			Updated
		</Badge>
	),
}

const LabelMap: {
	[key in Status]: string
} = {
	new: 'New',
	experimental: 'Experimental',
	stable: 'Stable',
	deprecated: 'Deprecated',
	'needs-update': 'Needs update',
	updated: 'Updated',
}

export function StatusBadge({ status }: { status?: Status }) {
	if (!status) return null

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="inline-flex">
					{IconMap[status]}
				</TooltipTrigger>
				<TooltipContent>{LabelMap[status]}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
