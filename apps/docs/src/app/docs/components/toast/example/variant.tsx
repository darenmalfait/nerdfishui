'use client'

import { Button, toast } from '@nerdfish/ui'

export function ToastVariantExample() {
	return (
		<div className="gap-md p-lg flex flex-wrap">
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
