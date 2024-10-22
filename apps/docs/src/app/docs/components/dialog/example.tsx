'use client'

import {
	Button,
	Dialog,
	Input,
	Label,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@nerdfish/ui'

export function DialogExample() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Decorate Cake</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Decorate your cake</DialogTitle>
					<DialogDescription>
						Make changes to your cake decorations here. Click save when
						you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<div className="gap-md py-md grid">
					<div className="gap-md grid grid-cols-4 items-center">
						<Label htmlFor="name" className="text-right">
							Cake Type
						</Label>
						<div className="col-span-3">
							<Input name="name" value="Chocolate Cake" />
						</div>
					</div>
					<div className="gap-md grid grid-cols-4 items-center">
						<Label htmlFor="username" className="text-right">
							Cake Topper
						</Label>
						<div className="col-span-3">
							<Input name="name" value="Happy Birthday" />
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save decorations</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
