'use client'

import { Description, Field, Label, MultiEmail } from '@nerdfish/ui'

export function MultiEmailExample() {
	return (
		<Field className="w-full">
			<Label>
				Emails
				<Description>Press enter to confirm an email address</Description>
			</Label>

			<MultiEmail />
		</Field>
	)
}
