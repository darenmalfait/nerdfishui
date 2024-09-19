'use client'

import {
	Button,
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@nerdfish/ui'
import { Plus } from 'lucide-react'

export function TooltipExample() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="outline"
						className="flex w-10 items-center justify-center rounded-full p-0"
					>
						<Plus className="size-4" />
						<span className="sr-only">Add</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
