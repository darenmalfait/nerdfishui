'use client'

import {
	Combobox,
	ComboboxClear,
	ComboboxEmpty,
	ComboboxIcon,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxControl,
	ComboboxList,
	ComboboxContent,
	ComboboxValue,
} from '@nerdfish/react/combobox'
import { useId } from 'react'

const fruits = [
	'Apple',
	'Banana',
	'Orange',
	'Pineapple',
	'Grape',
	'Mango',
	'Strawberry',
	'Blueberry',
	'Raspberry',
	'Blackberry',
	'Cherry',
	'Peach',
	'Pear',
	'Plum',
	'Kiwi',
	'Watermelon',
	'Cantaloupe',
	'Honeydew',
	'Papaya',
	'Guava',
	'Lychee',
	'Pomegranate',
	'Apricot',
	'Grapefruit',
	'Passionfruit',
]

export function ComboboxExample() {
	const id = useId()

	return (
		<div className="w-full">
			<Combobox items={fruits}>
				<ComboboxControl>
					<ComboboxValue>
						<ComboboxInput placeholder="e.g. Apple" id={id} />
					</ComboboxValue>
					<ComboboxClear />
					<ComboboxIcon />
				</ComboboxControl>

				<ComboboxContent>
					<ComboboxEmpty>No fruits found.</ComboboxEmpty>
					<ComboboxList>
						{(item: string) => (
							<ComboboxItem key={item} value={item}>
								<ComboboxItemIndicator />
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
		</div>
	)
}
