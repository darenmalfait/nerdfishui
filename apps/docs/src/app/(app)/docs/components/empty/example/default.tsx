'use client'

import { Button } from '@nerdfish/react/button'
import {
	Empty,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
	EmptyDescription,
	EmptyContent,
} from '@nerdfish/react/empty'
import { ExternalLinkIcon, FolderIcon } from 'lucide-react'

export function EmptyExample() {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderIcon />
				</EmptyMedia>
				<EmptyTitle>No Projects Yet</EmptyTitle>
				<EmptyDescription>
					You haven&apos;t created any projects yet. Get started by creating
					your first project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<div className="flex gap-2">
					<Button>Create Project</Button>
					<Button variant="outline">Import Project</Button>
				</div>
			</EmptyContent>
			<Button
				variant="link"
				render={<a href="#" />}
				className="text-muted-foreground items-center"
				size="sm"
			>
				Learn More <ExternalLinkIcon className="ml-bff size-4" />
			</Button>
		</Empty>
	)
}
