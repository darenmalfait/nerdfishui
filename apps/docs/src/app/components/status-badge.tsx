import {
	Badge,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/ui'
import { type NavigationItem } from 'docs.config'
import type * as React from 'react'

type Status = Exclude<NavigationItem['status'], undefined>

const IconMap: {
	[key in Status]: React.ReactNode
} = {
	new: '🚀',
	experimental: '🧪',
	stable: '🔒',
	deprecated: '💀',
	'needs-update': '🔄',
}

const LabelMap: {
	[key in Status]: string
} = {
	new: 'New',
	experimental: 'Experimental',
	stable: 'Stable',
	deprecated: 'Deprecated',
	'needs-update': 'Needs update',
}

export function StatusBadge({ status }: { status?: Status }) {
	if (!status) return null

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Badge variant="outline" className="border-none">
						{IconMap[status]}
					</Badge>
				</TooltipTrigger>
				<TooltipContent>{LabelMap[status]}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
