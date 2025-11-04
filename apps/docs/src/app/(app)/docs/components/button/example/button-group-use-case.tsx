'use client'

import { Button } from '@nerdfish/react/button'
import { ButtonGroup } from '@nerdfish/react/button-group'
import {
	DropdownMenuGroup,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@nerdfish/react/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

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
		useState<keyof typeof labelsMap>('merge')

	return (
		<ButtonGroup>
			<Button variant="success">{labelsMap[selectedOption]}</Button>

			<DropdownMenu>
				<DropdownMenuTrigger
					render={
						<Button variant="success" icon>
							<ChevronDownIcon className="size-4" />
						</Button>
					}
				/>
				<DropdownMenuContent className="max-w-[300px]">
					<DropdownMenuGroup>
						{Object.entries(labelsMap).map(([key, label]) => {
							const option = key as keyof typeof labelsMap
							return (
								<DropdownMenuItem
									onSelect={() => setSelectedOption(option)}
									key={key}
								>
									<div className="gap-best-friends flex flex-col">
										<span className="font-bold">{label}</span>
										<p className="text-sm">{descriptionsMap[option]}</p>
									</div>
								</DropdownMenuItem>
							)
						})}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</ButtonGroup>
	)
}
