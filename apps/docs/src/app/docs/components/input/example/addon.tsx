'use client'

import { Input, type InputSize, inputVariants } from '@nerdfish/ui'
import { cx, slugify } from '@nerdfish/utils'
import * as React from 'react'

function InputAddon({
	children,
	inputSize = 'md',
}: {
	children: React.ReactNode
	inputSize?: InputSize
}) {
	return (
		<div
			className={cx(
				inputVariants({ inputSize }),
				'bg-foreground/5 inline-flex w-auto font-normal shadow-none',
			)}
		>
			{children}
		</div>
	)
}

export function InputAddonExample() {
	const [value, setValue] = React.useState<string>('')

	return (
		<div className="gap-md flex w-full flex-col">
			<div className="gap-md flex flex-col md:flex-row">
				<Input
					name="slug"
					type="text"
					addOnLeading={<InputAddon inputSize="md">ui.nerdfish.be/</InputAddon>}
					value={value}
					variant="error"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					addOnLeading={<InputAddon>ui.nerdfish.be/</InputAddon>}
					type="text"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<div className="gap-md flex flex-col md:flex-row">
				<Input
					name="slug"
					type="text"
					addOnLeading={<InputAddon>ui.nerdfish.be/</InputAddon>}
					inputSize="sm"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					type="text"
					addOnLeading={<InputAddon>ui.nerdfish.be/</InputAddon>}
					value={value}
					inputSize="sm"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<div className="gap-md flex flex-col md:flex-row">
				<Input
					name="slug"
					type="text"
					addOnLeading={<InputAddon inputSize="lg">ui.nerdfish.be/</InputAddon>}
					inputSize="lg"
					value={value}
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
				<Input
					name="slug"
					type="text"
					addOnLeading={<InputAddon inputSize="lg">ui.nerdfish.be/</InputAddon>}
					value={value}
					inputSize="lg"
					onChange={(e) => setValue(slugify(e.target.value, true))}
					autoComplete="off"
				/>
			</div>
			<Input
				name="slug"
				type="text"
				addOnTrailing={<InputAddon>/admin</InputAddon>}
				value={value}
				onChange={(e) => setValue(slugify(e.target.value, true))}
				autoComplete="off"
			/>
		</div>
	)
}
