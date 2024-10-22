'use client'

import { Button, toast } from '@nerdfish/ui'

export function ToastActionExample() {
	return (
		<div className="gap-md p-lg flex flex-wrap">
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
