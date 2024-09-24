'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchVariantsExample() {
	return (
		<div className="max-w-screen-xsm mx-auto flex w-full flex-col gap-4">
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Info</span>
				<Switch variant="info" id="sugar-on-cake" />
			</Label>
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Accent</span>
				<Switch variant="accent" id="sugar-on-cake" />
			</Label>
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Error</span>
				<Switch variant="error" id="sugar-on-cake" />
			</Label>
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Success</span>
				<Switch variant="success" id="sugar-on-cake" />
			</Label>
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Warning</span>
				<Switch variant="warning" id="sugar-on-cake" />
			</Label>
		</div>
	)
}
