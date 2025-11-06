'use client'

import { Label } from '@nerdfish/react/label'
import { RadioGroup, RadioGroupItem } from '@nerdfish/react/radio-group'

export function RadioGroupWithDescriptionExample() {
	return (
		<div>
			<RadioGroup name="radio-demo" defaultValue="comfortable">
				<div className="flex items-start space-x-2">
					<RadioGroupItem value="default" id="with-description-1" />
					<Label
						className="gap-bff flex flex-col items-start justify-start text-left"
						htmlFor="with-description-1"
					>
						Default
						<p className="text-foreground-muted/70 w-full text-sm">
							This is a description for the Radio Group. It could be a very long
							description that can contain <strong>html</strong> elements.
						</p>
					</Label>
				</div>

				<div className="flex items-center space-x-2">
					<RadioGroupItem value="comfortable" id="with-description-2" />
					<Label htmlFor="with-description-2">Comfortable</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="compact" id="with-description-3" />
					<Label htmlFor="with-description-3">Compact</Label>
				</div>
			</RadioGroup>
		</div>
	)
}
