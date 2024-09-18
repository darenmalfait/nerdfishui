'use client'

import { Button, toast } from '@nerdfish/ui'

export function ToastExample() {
	return <Button onClick={() => toast.message('Hi there')}>Show Toast</Button>
}
