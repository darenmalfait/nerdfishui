'use client'

import { Button } from '@nerdfish/react/button'

export default function ButtonRenderExample() {
	return <Button render={<a href="https://nerdfish.be">Nerdfish</a>} />
}
