'use client'

import { Checkbox, Description, Field, Label } from '@nerdfish/ui'

export function CheckboxWithTextExample() {
	return (
		<div className="items-top flex flex-col space-y-2">
			<Field>
				<Label className="gap-sm flex items-center">
					<Checkbox name="newsletter" />
					Subscribe to our newsletter
				</Label>

				<Description>
					We&apos;ll send you the latest news and updates.
				</Description>
			</Field>
		</div>
	)
}
