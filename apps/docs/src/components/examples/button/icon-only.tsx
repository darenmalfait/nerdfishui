'use client'

import { Button } from '@nerdfish/ui'
import { Mail } from 'lucide-react'
import * as React from 'react'

export function ButtonIconOnly() {
	return (
		<Button size="icon">
			<Mail className="size-4" />
			<span className="sr-only">Mail</span>
		</Button>
	)
}
