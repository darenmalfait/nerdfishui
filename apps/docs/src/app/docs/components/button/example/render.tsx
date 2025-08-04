'use client'

import { Button } from '@nerdfish/ui'
import Link from 'next/link'

export function ButtonRenderExample() {
	return <Button render={<Link href="https://nerdfish.be">Nerdfish</Link>} />
}
