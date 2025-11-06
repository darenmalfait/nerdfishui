'use client'

import { Button } from '@nerdfish/react/button'
import { ButtonGroup } from '@nerdfish/react/button-group'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'
import { BoldIcon, UnderlineIcon, UndoIcon } from 'lucide-react'

export function TooltipExample() {
	return (
		<TooltipProvider>
			<ButtonGroup>
				<Tooltip>
					<TooltipTrigger render={<Button variant="secondary" icon />}>
						<BoldIcon />
					</TooltipTrigger>
					<TooltipContent>
						<p>Bold</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger render={<Button variant="secondary" icon />}>
						<UnderlineIcon />
					</TooltipTrigger>
					<TooltipContent>
						<p>Underline</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger render={<Button variant="secondary" icon />}>
						<UndoIcon />
					</TooltipTrigger>
					<TooltipContent>
						<p>Undo</p>
					</TooltipContent>
				</Tooltip>
			</ButtonGroup>
		</TooltipProvider>
	)
}
