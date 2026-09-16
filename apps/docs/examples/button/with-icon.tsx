'use client'

import { Button } from '@nerdfish/react/button'
import { MailIcon } from 'lucide-react'

export default function ButtonWithIconExample() {
	return (
		<Button>
			<MailIcon className="mr-best-friends size-4" /> Login with Email
		</Button>
	)
}
