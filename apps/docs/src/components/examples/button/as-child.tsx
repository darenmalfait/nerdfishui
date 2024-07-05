'use client'

import { Button } from '@nerdfish/ui'
import Link from 'next/link'
import * as React from 'react'

export function ButtonAsChild() {
	return (
		<Button asChild>
			<Link href="https://nerdfish.be">Nerdfish</Link>
		</Button>
	)
}
