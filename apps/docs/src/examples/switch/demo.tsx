'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchDemo() {
	return (
		<div className="max-w-screen-xsm mx-auto w-full">
			<Label
				htmlFor="sugar-on-cake"
				className="flex w-full items-center justify-between gap-4"
			>
				<span>Sugar on cake</span>
				<Switch id="sugar-on-cake" />
			</Label>
		</div>
	)
}
