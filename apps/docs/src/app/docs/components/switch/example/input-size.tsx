'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchInputSizeExample() {
	return (
		<div className="max-w-screen-xsm gap-md mx-auto flex w-full flex-col">
			<Label className="hover:bg-muted rounded-semi gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Small</span>
				<Switch inputSize="sm" />
			</Label>
			<Label className="hover:bg-muted rounded-semi gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Medium</span>
				<Switch inputSize="md" />
			</Label>
			<Label className="hover:bg-muted rounded-semi gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Large</span>
				<Switch inputSize="lg" />
			</Label>
			<Label className="hover:bg-muted rounded-semi gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>XLarge</span>
				<Switch inputSize="xl" />
			</Label>
		</div>
	)
}
