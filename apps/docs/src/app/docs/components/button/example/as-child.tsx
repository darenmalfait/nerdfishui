'use client'

import { Button } from '@nerdfish/ui'
import Link from 'next/link'

export function ButtonAsChildExample() {
	return (
		<Button asChild>
			<Link href="https://nerdfish.be">Nerdfish</Link>
		</Button>
	)
}
