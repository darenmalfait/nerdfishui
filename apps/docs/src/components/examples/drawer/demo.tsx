'use client'

import { Button, Drawer } from '@nerdfish/ui'

export function DrawerDemo() {
	return (
		<Drawer.Root direction="bottom">
			<Drawer.Trigger asChild>
				<Button variant="outline">Open</Button>
			</Drawer.Trigger>
			<Drawer.Content className="w-full">
				<Drawer.Header>
					<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
					<Drawer.Description>This action cannot be undone.</Drawer.Description>
				</Drawer.Header>
				<Drawer.Footer>
					<Button>Submit</Button>
					<Drawer.Close>
						<Button variant="outline">Cancel</Button>
					</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	)
}
