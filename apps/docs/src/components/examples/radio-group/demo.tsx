import { Description, Label, RadioGroup } from '@nerdfish/ui'
import * as React from 'react'

export function RadioGroupDemo() {
	return (
		<RadioGroup name="radio-demo" defaultValue="comfortable" label="Spacing">
			<RadioGroup.Field>
				<RadioGroup.Item value="default" id="r1" />
				<Label htmlFor="r1">Default</Label>
				<Description>
					This is a description for the Radio Group. It could be a very long
					description that can contain <strong>html</strong> elements.
				</Description>
			</RadioGroup.Field>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label htmlFor="r2">Comfortable</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" />
				<Label htmlFor="r3">Compact</Label>
			</div>
		</RadioGroup>
	)
}
