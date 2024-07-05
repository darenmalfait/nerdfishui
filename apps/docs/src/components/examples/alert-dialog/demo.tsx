'use client'

import { AlertDialog, Button } from '@nerdfish/ui'

export function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialog.Trigger asChild>
				<Button variant="outline">Open</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action>Continue</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}
