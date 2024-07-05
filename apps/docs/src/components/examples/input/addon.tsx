'use client'

import { Input } from '@nerdfish/ui'
import { slugify } from '@nerdfish/utils'
import * as React from 'react'

export function InputAddonDemo() {
	const [value, setValue] = React.useState<string>('')

	return (
		<div className="flex w-full flex-col gap-6">
			<div className="flex flex-col gap-4 md:flex-row">
				<Input
					name="slug"
					label="URL"
					type="text"
					addOnLeading="ui.nerdfish.be/"
					value={value}
					error="This is an error"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					label="URL"
					type="text"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<div className="flex flex-col gap-4 md:flex-row">
				<Input
					name="slug"
					label="URL"
					type="text"
					addOnLeading="ui.nerdfish.be/"
					inputSize="sm"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					label="URL"
					type="text"
					value={value}
					inputSize="sm"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<div className="flex flex-col gap-4 md:flex-row">
				<Input
					name="slug"
					label="URL"
					type="text"
					addOnLeading="ui.nerdfish.be/"
					inputSize="lg"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					label="URL"
					type="text"
					value={value}
					inputSize="lg"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<Input
				name="slug"
				label="URL"
				type="text"
				addOnTrailing="/admin"
				value={value}
				onChange={(e) => setValue(slugify(e.target.value, true))}
				autoComplete="off"
			/>
		</div>
	)
}
