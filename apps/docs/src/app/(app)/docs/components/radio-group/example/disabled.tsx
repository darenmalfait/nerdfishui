'use client'

import { Label } from '@nerdfish/react/label'
import { RadioGroup, RadioGroupItem } from '@nerdfish/react/radio-group'

export function RadioGroupDisabledExample() {
	return (
		<RadioGroup defaultValue="disabled-option2">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="disabled-option1"
					id="disabled-option1"
					disabled
				/>
				<Label htmlFor="option1">Option 1</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="disabled-option2"
					id="disabled-option2"
					disabled
				/>
				<Label htmlFor="option2">Option 2</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="disabled-option3"
					id="disabled-option3"
					disabled
				/>
				<Label htmlFor="option3">Option 3</Label>
			</div>
		</RadioGroup>
	)
}
