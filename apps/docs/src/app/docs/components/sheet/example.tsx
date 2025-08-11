'use client'

import {
	Button,
	Input,
	Label,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@nerdfish/ui'

export function SheetExample() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="outline">Open</Button>} />
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you are done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid w-full gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" value="Nerdfish" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input id="username" value="@nerdfish" className="col-span-3" />
					</div>
				</div>
				<SheetFooter>
					<SheetClose render={<Button type="submit">Save changes</Button>} />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
