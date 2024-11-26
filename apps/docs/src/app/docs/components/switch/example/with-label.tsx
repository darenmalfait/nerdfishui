'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchWithLabelExample() {
	return (
		<div className="max-w-screen-xsm mx-auto w-full">
			<Label className="hover:bg-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Sugar on cake</span>
				<Switch />
			</Label>
		</div>
	)
}
