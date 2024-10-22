'use client'

import {
	Button,
	ButtonGroup,
	Description,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@nerdfish/ui'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'

const descriptionsMap = {
	merge:
		'All commits from the source branch are added to the destination branch via a merge commit.',
	squash:
		'All commits from the source branch are added to the destination branch as a single commit.',
	rebase:
		'All commits from the source branch are added to the destination branch individually.',
}

const labelsMap = {
	merge: 'Create a merge commit',
	squash: 'Squash and merge',
	rebase: 'Rebase and merge',
}

export function ButtonGroupUseCase() {
	const [selectedOption, setSelectedOption] =
		React.useState<keyof typeof labelsMap>('merge')

	return (
		<ButtonGroup>
			<Button>{labelsMap[selectedOption]}</Button>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon">
						<ChevronDownIcon className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="max-w-[300px]">
					{Object.entries(labelsMap).map(([key, label]) => {
						const option = key as keyof typeof labelsMap
						return (
							<DropdownMenuItem
								onSelect={() => setSelectedOption(option)}
								key={key}
							>
								<div className="gap-sm flex flex-col">
									<span className="font-bold">{label}</span>
									<Description>{descriptionsMap[option]}</Description>
								</div>
							</DropdownMenuItem>
						)
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</ButtonGroup>
	)
}
