'use client'

import { Button } from '@nerdfish/react/button'
import { Input } from '@nerdfish/react/input'
import { Label } from '@nerdfish/react/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@nerdfish/react/select'
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

const months = [
	{ label: 'MM', value: null },
	{ label: '01', value: '01' },
	{ label: '02', value: '02' },
	{ label: '03', value: '03' },
	{ label: '04', value: '04' },
	{ label: '05', value: '05' },
]

export function SheetExample() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="outline">Open</Button>} />
			<SheetContent>
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
					<div className="gap-friends grid">
						<Label htmlFor="sheet-demo-month">Birth Month</Label>
						<Select items={months}>
							<SelectTrigger id="sheet-demo-month">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{months.map((month) => (
									<SelectItem key={month.value} value={month.value}>
										{month.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
					<SheetClose render={<Button variant="outline">Close</Button>} />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
