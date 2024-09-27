'use client'

import { Label, Switch } from '@nerdfish/ui'

export function SwitchVariantsExample() {
	return (
		<div className="max-w-screen-xsm mx-auto flex w-full flex-col gap-4">
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Info</span>
				<Switch variant="info" />
			</Label>
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Accent</span>
				<Switch variant="accent" />
			</Label>
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Danger</span>
				<Switch variant="danger" />
			</Label>
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Success</span>
				<Switch variant="success" />
			</Label>
			<Label className="hover:bg-muted rounded-semi flex w-full cursor-pointer items-center justify-between gap-4 p-4">
				<span>Warning</span>
				<Switch variant="warning" />
			</Label>
		</div>
	)
}
