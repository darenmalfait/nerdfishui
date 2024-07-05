'use client'

import { Button, toast } from '@nerdfish/ui'
import * as React from 'react'

export function ToastDemo() {
	return <Button onClick={() => toast.message('Hi there')}>Show Toast</Button>
}
