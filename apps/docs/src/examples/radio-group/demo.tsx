import { FieldDescription, FieldLabel, RadioGroup } from '@nerdfish/ui'

export function RadioGroupDemo() {
	return (
		<RadioGroup.Root
			name="radio-demo"
			defaultValue="comfortable"
			label="Spacing"
		>
			<RadioGroup.Field>
				<RadioGroup.Item value="default" id="r1" />
				<FieldLabel htmlFor="r1">Default</FieldLabel>
				<FieldDescription>
					This is a description for the Radio Group. It could be a very long
					description that can contain <strong>html</strong> elements.
				</FieldDescription>
			</RadioGroup.Field>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<FieldLabel htmlFor="r2">Comfortable</FieldLabel>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" />
				<FieldLabel htmlFor="r3">Compact</FieldLabel>
			</div>
		</RadioGroup.Root>
	)
}
