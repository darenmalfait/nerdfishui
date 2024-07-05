'use client'

import { Button, toast } from '@nerdfish/ui'
import * as React from 'react'

export function ToastVariant() {
	return (
		<div className="flex flex-wrap gap-3 p-8">
			<Button
				variant="default"
				onClick={() => toast.message('default example')}
			>
				Default Example
			</Button>
			<Button
				variant="success"
				onClick={() => toast.success('Success example')}
			>
				Success Example
			</Button>
			<Button
				variant="secondary"
				onClick={() => toast.warning('Warning example')}
			>
				Warning Example
			</Button>
			<Button variant="secondary" onClick={() => toast.info('Info example')}>
				Info Example
			</Button>
			<Button variant="danger" onClick={() => toast.error('Danger example')}>
				Danger Example
			</Button>
		</div>
	)
}
