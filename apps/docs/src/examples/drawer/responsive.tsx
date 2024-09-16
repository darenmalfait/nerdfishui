'use client'

import {
	Button,
	Dialog,
	Drawer,
	Field,
	Input,
	Label,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
} from '@nerdfish/ui'
import { cx, useMediaQuery } from '@nerdfish/utils'
import * as React from 'react'

export function DrawerResponsiveDemo() {
	const [open, setOpen] = React.useState(false)
	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DialogDescription>
					</DialogHeader>
					<ProfileForm />
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DrawerDescription>
				</DrawerHeader>
				<ProfileForm className="px-4" />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
	return (
		<form className={cx('grid items-start gap-4', className)}>
			<div className="grid gap-2">
				<Field>
					<Label htmlFor="email">Email</Label>
					<Input
						name="email"
						type="email"
						id="email"
						defaultValue="nerdfish@example.com"
					/>
				</Field>
			</div>
			<div className="grid gap-2">
				<Field>
					<Label htmlFor="username">Username</Label>
					<Input name="username" id="username" defaultValue="@nerdfish" />
				</Field>
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	)
}
