'use client'

import { Field } from '@nerdfish/react/field'
import { Label } from '@nerdfish/react/label'
import { Switch } from '@nerdfish/react/switch'

export function SwitchSizeExample() {
	return (
		<div className="space-y-friends">
			<Field orientation="horizontal">
				<Switch size="xs" id="size-xs" />
				<Label htmlFor="size-xs">xs</Label>
			</Field>
			<Field orientation="horizontal">
				<Switch size="sm" id="size-sm" />
				<Label htmlFor="size-sm">sm</Label>
			</Field>
			<Field orientation="horizontal">
				<Switch size="md" id="size-md" />
				<Label htmlFor="size-md">md</Label>
			</Field>
			<Field orientation="horizontal">
				<Switch size="lg" id="size-lg" />
				<Label htmlFor="size-lg">lg</Label>
			</Field>
			<Field orientation="horizontal">
				<Switch size="xl" id="size-xl" />
				<Label htmlFor="size-xl">xl</Label>
			</Field>
		</div>
	)
}
