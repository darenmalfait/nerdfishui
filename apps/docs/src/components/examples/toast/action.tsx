'use client'

import { Button, toast } from '@nerdfish/ui'

export function ToastAction() {
	return (
		<div className="flex flex-wrap gap-3 p-8">
			<Button
				variant="default"
				onClick={() =>
					toast.message('default example', {
						action: {
							label: 'Default',
							onClick: () => {
								toast.message('Action clicked')
							},
						},
					})
				}
			>
				Default Example
			</Button>
			<Button
				variant="default"
				onClick={() =>
					toast.message('default example', {
						cancel: {
							label: 'Cancel',
							onClick: () => {
								toast.message('Cancel clicked')
							},
						},
					})
				}
			>
				Cancel Example
			</Button>
		</div>
	)
}
