'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'
import * as React from 'react'

export function ButtonWithIcon() {
	return (
		<Button>
			<Mail className="mr-2 size-4" /> Login with Email
		</Button>
	)
}
