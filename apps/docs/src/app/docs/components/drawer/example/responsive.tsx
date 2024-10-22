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
	useMediaQuery,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function DrawerResponsiveExample() {
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
				<ProfileForm className="px-md" />
				<DrawerFooter className="pt-sm">
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
		<form className={cx('gap-md grid items-start', className)}>
			<div className="gap-sm grid">
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
			<div className="gap-sm grid">
				<Field>
					<Label htmlFor="username">Username</Label>
					<Input name="username" id="username" defaultValue="@nerdfish" />
				</Field>
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	)
}
