'use client'

import { ErrorDescription, Field, Input, Label } from '@nerdfish/ui'

export function InputVariantsExample() {
	return (
		<div className="space-y-8">
			<Field>
				<Label>Default</Label>
				<Input
					name="email-error"
					variant="default"
					type="email"
					placeholder="Email"
				/>
			</Field>
			<Field>
				<Label>Error</Label>
				<Input
					name="email-error"
					variant="error"
					type="email"
					placeholder="Email"
				/>
				<ErrorDescription>This is an error message.</ErrorDescription>
			</Field>
			<Field>
				<Label>Success</Label>
				<Input
					name="email-success"
					variant="success"
					type="email"
					placeholder="Email"
				/>
			</Field>
		</div>
	)
}
