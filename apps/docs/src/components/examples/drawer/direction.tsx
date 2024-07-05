'use client'

import { Button, Drawer } from '@nerdfish/ui'
import * as React from 'react'

export function DrawerDirection() {
	return (
		<div className="flex flex-col space-y-4">
			<Drawer direction="left">
				<Drawer.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Drawer.Trigger>
				<Drawer.Content className="w-full">
					<Drawer.Header>
						<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
						<Drawer.Description>
							This action cannot be undone.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<Button>Submit</Button>
						<Drawer.Close>
							<Button variant="outline">Cancel</Button>
						</Drawer.Close>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer>
			<Drawer direction="right">
				<Drawer.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Drawer.Trigger>
				<Drawer.Content className="w-full">
					<Drawer.Header>
						<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
						<Drawer.Description>
							This action cannot be undone.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<Button>Submit</Button>
						<Drawer.Close>
							<Button variant="outline">Cancel</Button>
						</Drawer.Close>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer>
			<Drawer direction="bottom">
				<Drawer.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Drawer.Trigger>
				<Drawer.Content className="w-full">
					<Drawer.Header>
						<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
						<Drawer.Description>
							This action cannot be undone.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<Button>Submit</Button>
						<Drawer.Close>
							<Button variant="outline">Cancel</Button>
						</Drawer.Close>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer>
			<Drawer direction="top">
				<Drawer.Trigger asChild>
					<Button variant="outline">Top</Button>
				</Drawer.Trigger>
				<Drawer.Content className="w-full">
					<Drawer.Header>
						<Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
						<Drawer.Description>
							This action cannot be undone.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<Button>Submit</Button>
						<Drawer.Close>
							<Button variant="outline">Cancel</Button>
						</Drawer.Close>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer>
		</div>
	)
}
