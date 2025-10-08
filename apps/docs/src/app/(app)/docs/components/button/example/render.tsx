'use client'

import { Button } from '@nerdfish/react/button'
import Link from 'next/link'

export function ButtonRenderExample() {
	return <Button render={<Link href="https://nerdfish.be">Nerdfish</Link>} />
}
