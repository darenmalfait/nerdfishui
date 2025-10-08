'use client'

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from '@nerdfish/react/input-group'
import { Separator } from '@nerdfish/react/separator'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'
import {
	ArrowUpIcon,
	CheckIcon,
	InfoIcon,
	PlusIcon,
	SearchIcon,
} from 'lucide-react'

export function InputGroupExample() {
	return (
		<div className="grid w-full gap-6">
			<InputGroup>
				<InputGroupInput placeholder="Search..." />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">12 results</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder="example.com" className="!pl-1" />
				<InputGroupAddon>
					<InputGroupText>https://</InputGroupText>
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger
								render={
									<InputGroupButton className="rounded-full" size="xs" icon>
										<InfoIcon />
									</InputGroupButton>
								}
							/>
							<TooltipContent>This is content in a tooltip.</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupTextarea placeholder="Ask, Search or Chat..." />
				<InputGroupAddon align="block-end">
					<InputGroupButton
						variant="outline"
						className="rounded-full"
						size="xs"
						icon
					>
						<PlusIcon />
					</InputGroupButton>

					<InputGroupText className="ml-auto">52% used</InputGroupText>
					<Separator orientation="vertical" className="!h-4" />
					<InputGroupButton
						variant="default"
						className="rounded-full"
						size="xs"
						icon
						disabled
					>
						<ArrowUpIcon />
						<span className="sr-only">Send</span>
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder="@handle" />
				<InputGroupAddon align="inline-end">
					<div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
						<CheckIcon className="size-3" />
					</div>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
}
