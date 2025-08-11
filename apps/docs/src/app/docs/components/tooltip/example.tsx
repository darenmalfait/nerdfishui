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
				<TooltipTrigger
					render={
						<Button
							icon
							variant="outline"
							className="flex items-center justify-center rounded-full"
						>
							<Plus className="size-4" />
							<span className="sr-only">Add</span>
						</Button>
					}
				/>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
