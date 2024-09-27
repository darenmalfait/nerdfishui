'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchWithLabelExample() {
	return (
		<div className="max-w-screen-xsm mx-auto w-full">
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Sugar on cake</span>
				<Switch />
			</Label>
		</div>
	)
}
