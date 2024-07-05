'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchDemo() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="sugar-on-cake" />
			<Label htmlFor="sugar-on-cake">Sugar on cake</Label>
		</div>
	)
}
