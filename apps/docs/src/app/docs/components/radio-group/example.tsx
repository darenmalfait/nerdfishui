'use client'

import {
	Description,
	Label,
	RadioGroupField,
	RadioGroup,
	RadioGroupItem,
} from '@nerdfish/ui'

export function RadioGroupExample() {
	return (
		<div className="w-full">
			<RadioGroup name="radio-demo" defaultValue="comfortable">
				<RadioGroupField>
					<RadioGroupItem value="default" id="r1" />
					<Label htmlFor="r1">
						Default
						<Description className="w-full">
							This is a description for the Radio Group. It could be a very long
							description that can contain <strong>html</strong> elements.
						</Description>
					</Label>
				</RadioGroupField>

				<RadioGroupField>
					<RadioGroupItem value="comfortable" id="r2" />
					<Label htmlFor="r2">Comfortable</Label>
				</RadioGroupField>
				<RadioGroupField>
					<RadioGroupItem value="compact" id="r3" />
					<Label htmlFor="r3">Compact</Label>
				</RadioGroupField>
			</RadioGroup>
		</div>
	)
}
