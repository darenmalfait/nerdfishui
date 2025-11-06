'use client'

import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@nerdfish/react/alert-dialog'
import { Button } from '@nerdfish/react/button'

export function AlertDialogExample() {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				render={<Button variant="destructive">Discard changes</Button>}
			/>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently remove your
						changes.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose
						render={<Button variant="outline">Cancel</Button>}
					/>
					<AlertDialogClose
						render={<Button variant="destructive">Discard</Button>}
					/>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
