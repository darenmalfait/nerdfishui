'use client'

import {
	Combobox,
	ComboboxChip,
	ComboboxChipRemove,
	ComboboxChips,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxList,
	ComboboxValue,
} from '@nerdfish/react/combobox'
import { Label } from '@nerdfish/react/label'
import { Fragment, useId, useRef } from 'react'

interface ProgrammingLanguage {
	id: string
	value: string
}

const langs: ProgrammingLanguage[] = [
	{ id: 'js', value: 'JavaScript' },
	{ id: 'ts', value: 'TypeScript' },
	{ id: 'py', value: 'Python' },
	{ id: 'java', value: 'Java' },
	{ id: 'cpp', value: 'C++' },
	{ id: 'cs', value: 'C#' },
	{ id: 'php', value: 'PHP' },
	{ id: 'ruby', value: 'Ruby' },
	{ id: 'go', value: 'Go' },
	{ id: 'rust', value: 'Rust' },
	{ id: 'swift', value: 'Swift' },
]

export function MultiSelectComboboxExample() {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const id = useId()

	return (
		<Combobox items={langs} multiple>
			<div className="gap-friends flex w-full max-w-[500px] flex-col">
				<Label htmlFor={id}>Programming languages</Label>
				<ComboboxChips ref={containerRef}>
					<ComboboxValue>
						{(value: ProgrammingLanguage[]) => (
							<Fragment>
								{value.map((language) => (
									<ComboboxChip key={language.id} aria-label={language.value}>
										{language.value}
										<ComboboxChipRemove />
									</ComboboxChip>
								))}
								<ComboboxInput
									id={id}
									placeholder={value.length > 0 ? '' : 'e.g. TypeScript'}
								/>
							</Fragment>
						)}
					</ComboboxValue>
				</ComboboxChips>
			</div>

			<ComboboxContent anchor={containerRef}>
				<ComboboxEmpty>No languages found.</ComboboxEmpty>
				<ComboboxList>
					{(language: ProgrammingLanguage) => (
						<ComboboxItem key={language.id} value={language}>
							<ComboboxItemIndicator />
							<div className="col-start-2">{language.value}</div>
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}
