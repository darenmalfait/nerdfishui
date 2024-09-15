'use client'

import { Button, Dialog, Input, Label } from '@nerdfish/ui'

export function DialogDemo() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="outline">Decorate Cake</Button>
			</Dialog.Trigger>
			<Dialog.Content className="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Decorate your cake</Dialog.Title>
					<Dialog.Description>
						Make changes to your cake decorations here. Click save when
						you&apos;re done.
					</Dialog.Description>
				</Dialog.Header>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Cake Type
						</Label>
						<div className="col-span-3">
							<Input name="name" value="Chocolate Cake" />
						</div>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Cake Topper
						</Label>
						<div className="col-span-3">
							<Input name="name" value="Happy Birthday" />
						</div>
					</div>
				</div>
				<Dialog.Footer>
					<Button type="submit">Save decorations</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	)
}
