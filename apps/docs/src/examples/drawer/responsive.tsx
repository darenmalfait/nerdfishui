'use client'

import { Button, Dialog, Drawer, Field, Input, Label } from '@nerdfish/ui'
import { cx, useMediaQuery } from '@nerdfish/utils'
import * as React from 'react'

export function DrawerResponsiveDemo() {
	const [open, setOpen] = React.useState(false)
	const isDesktop = useMediaQuery('(min-width: 768px)')

	if (isDesktop) {
		return (
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<Dialog.Trigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</Dialog.Trigger>
				<Dialog.Content className="sm:max-w-[425px]">
					<Dialog.Header>
						<Dialog.Title>Edit profile</Dialog.Title>
						<Dialog.Description>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</Dialog.Description>
					</Dialog.Header>
					<ProfileForm />
				</Dialog.Content>
			</Dialog.Root>
		)
	}

	return (
		<Drawer.Root open={open} onOpenChange={setOpen}>
			<Drawer.Trigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header className="text-left">
					<Drawer.Title>Edit profile</Drawer.Title>
					<Drawer.Description>
						Make changes to your profile here. Click save when you&apos;re done.
					</Drawer.Description>
				</Drawer.Header>
				<ProfileForm className="px-4" />
				<Drawer.Footer className="pt-2">
					<Drawer.Close asChild>
						<Button variant="outline">Cancel</Button>
					</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
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
