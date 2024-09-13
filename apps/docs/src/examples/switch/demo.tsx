'use client'

import { FieldLabel, Switch } from '@nerdfish/ui'

export function SwitchDemo() {
	return (
		<div className="flex items-center space-x-2">
			<Switch id="sugar-on-cake" />
			<FieldLabel htmlFor="sugar-on-cake">Sugar on cake</FieldLabel>
		</div>
	)
}
