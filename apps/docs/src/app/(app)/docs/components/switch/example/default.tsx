'use client'

import { Field } from '@nerdfish/react/field'
import { Label } from '@nerdfish/react/label'
import { Switch } from '@nerdfish/react/switch'

export function SwitchExample() {
	return (
		<Field orientation="horizontal" className="flex justify-center">
			<Switch id="airplane-mode" />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</Field>
	)
}
