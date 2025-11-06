'use client'

import { Button } from '@nerdfish/react/button'
import { Input } from '@nerdfish/react/input'
import { Label } from '@nerdfish/react/label'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@nerdfish/react/sheet'

function SheetContentContent() {
	return (
		<>
			<SheetHeader>
				<SheetTitle>Edit profile</SheetTitle>
				<SheetDescription>
					Make changes to your profile here. Click save when you&apos;re done.
				</SheetDescription>
			</SheetHeader>
			<div className="gap-casual px-friends grid flex-1 auto-rows-min">
				<div className="gap-friends grid">
					<Label htmlFor="sheet-demo-name">Name</Label>
					<Input id="sheet-demo-name" defaultValue="Nerdfish" />
				</div>
				<div className="gap-friends grid">
					<Label htmlFor="sheet-demo-username">Username</Label>
					<Input id="sheet-demo-username" defaultValue="@nerdfish" />
				</div>
			</div>
			<SheetFooter>
				<Button type="submit">Save changes</Button>
				<SheetClose render={<Button variant="outline">Close</Button>} />
			</SheetFooter>
		</>
	)
}

export function SheetSideExample() {
	return (
		<div className="gap-casual px-friends grid">
			<Sheet>
				<SheetTrigger render={<Button variant="outline">Right</Button>} />
				<SheetContent side="right">
					<SheetContentContent />
				</SheetContent>
			</Sheet>
			<Sheet>
				<SheetTrigger render={<Button variant="outline">Left</Button>} />
				<SheetContent side="left">
					<SheetContentContent />
				</SheetContent>
			</Sheet>
			<Sheet>
				<SheetTrigger render={<Button variant="outline">Bottom</Button>} />
				<SheetContent side="bottom">
					<SheetContentContent />
				</SheetContent>
			</Sheet>
			<Sheet>
				<SheetTrigger render={<Button variant="outline">Top</Button>} />
				<SheetContent side="top">
					<SheetContentContent />
				</SheetContent>
			</Sheet>
		</div>
	)
}
