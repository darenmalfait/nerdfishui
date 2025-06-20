'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchVariantsExample() {
	return (
		<div className="max-w-screen-xsm gap-md mx-auto flex w-full flex-col">
			<Label className="hover:bg-background-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Info</span>
				<Switch variant="info" />
			</Label>
			<Label className="hover:bg-background-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Accent</span>
				<Switch variant="brand" />
			</Label>
			<Label className="hover:bg-background-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Danger</span>
				<Switch variant="danger" />
			</Label>
			<Label className="hover:bg-background-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Success</span>
				<Switch variant="success" />
			</Label>
			<Label className="hover:bg-background-muted rounded-base gap-md p-md flex w-full cursor-pointer items-center justify-between">
				<span>Warning</span>
				<Switch variant="warning" />
			</Label>
		</div>
	)
}
