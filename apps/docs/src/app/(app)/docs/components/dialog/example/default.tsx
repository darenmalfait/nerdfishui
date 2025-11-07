'use client'

import { Button } from '@nerdfish/react/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@nerdfish/react/dialog'
import { Input } from '@nerdfish/react/input'
import { Label } from '@nerdfish/react/label'

export function DialogExample() {
	return (
		<Dialog>
			<form>
				<DialogTrigger
					render={<Button variant="outline">Open Dialog</Button>}
				/>
				<DialogContent className="sm:max-w-106.25">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Name</Label>
							<Input id="name-1" name="name" defaultValue="nerdfish" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="username-1">Username</Label>
							<Input id="username-1" name="username" defaultValue="@nerdfish" />
						</div>
					</div>
					<DialogFooter>
						<DialogClose render={<Button variant="outline">Cancel</Button>} />
						<DialogClose render={<Button type="submit">Save changes</Button>} />
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	)
}
