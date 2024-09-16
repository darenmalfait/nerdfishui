import {
	Description,
	Label,
	RadioGroupField,
	RadioGroup,
	RadioGroupItem,
} from '@nerdfish/ui'

export function RadioGroupDemo() {
	return (
		<div className="w-full">
			<RadioGroup name="radio-demo" defaultValue="comfortable">
				<RadioGroupField>
					<RadioGroupItem value="default" id="r1" />
					<div>
						<Label htmlFor="r1">Default</Label>
						<Description className="w-full">
							This is a description for the Radio Group. It could be a very long
							description that can contain <strong>html</strong> elements.
						</Description>
					</div>
				</RadioGroupField>

				<div className="flex items-center space-x-4">
					<RadioGroupItem value="comfortable" id="r2" />
					<Label htmlFor="r2">Comfortable</Label>
				</div>
				<div className="flex items-center space-x-4">
					<RadioGroupItem value="compact" id="r3" />
					<Label htmlFor="r3">Compact</Label>
				</div>
			</RadioGroup>
		</div>
	)
}
