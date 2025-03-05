'use client'

import {
	Button,
	EmptyState,
	EmptyStateIcon,
	EmptyStateTitle,
	EmptyStateDescription,
	EmptyStateActions,
} from '@nerdfish/ui'
import { TriangleAlertIcon } from 'lucide-react'

export function EmptyStateExample() {
	return (
		<EmptyState>
			<EmptyStateIcon>
				<TriangleAlertIcon className="!text-danger-foreground" />
			</EmptyStateIcon>
			<EmptyStateTitle>No data</EmptyStateTitle>
			<EmptyStateDescription>No data to display</EmptyStateDescription>
			<EmptyStateActions>
				<Button variant="secondary">Import items</Button>
				<Button>Create first item</Button>
			</EmptyStateActions>
		</EmptyState>
	)
}
