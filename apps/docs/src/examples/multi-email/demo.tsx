'use client'

import { Description, Field, Label, MultiEmail } from '@nerdfish/ui'

export function MultiEmailDemo() {
	return (
		<Field className="w-full">
			<Label>Emails</Label>
			<Description>Press enter to confirm an email address</Description>
			<MultiEmail />
		</Field>
	)
}
