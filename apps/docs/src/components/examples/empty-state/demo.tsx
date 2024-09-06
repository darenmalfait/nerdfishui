import { Button, EmptyState } from '@nerdfish/ui'
import { TriangleAlertIcon } from 'lucide-react'

export function EmptyStateDemo() {
	return (
		<EmptyState.Root>
			<EmptyState.Icon>
				<TriangleAlertIcon className="!text-danger" />
			</EmptyState.Icon>
			<EmptyState.Title>No data</EmptyState.Title>
			<EmptyState.Description>No data to display</EmptyState.Description>
			<EmptyState.Actions>
				<Button variant="secondary">Import items</Button>
				<Button>Create first item</Button>
			</EmptyState.Actions>
		</EmptyState.Root>
	)
}
