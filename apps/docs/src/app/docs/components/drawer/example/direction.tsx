'use client'

import {
	Button,
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	DrawerFooter,
	DrawerClose,
	DrawerDescription,
} from '@nerdfish/ui'

export function DrawerDirectionExample() {
	return (
		<div className="flex flex-col space-y-4">
			<Drawer direction="left">
				<DrawerTrigger asChild>
					<Button variant="outline">Left</Button>
				</DrawerTrigger>
				<DrawerContent className="!w-full max-w-[500px]">
					<DrawerHeader>
						<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer direction="right">
				<DrawerTrigger asChild>
					<Button variant="outline">Right</Button>
				</DrawerTrigger>
				<DrawerContent className="!w-full max-w-[500px]">
					<DrawerHeader>
						<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer direction="bottom">
				<DrawerTrigger asChild>
					<Button variant="outline">Bottom</Button>
				</DrawerTrigger>
				<DrawerContent className="w-full">
					<DrawerHeader>
						<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer direction="top">
				<DrawerTrigger asChild>
					<Button variant="outline">Top</Button>
				</DrawerTrigger>
				<DrawerContent className="w-full">
					<DrawerHeader>
						<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
						<DrawerDescription>This action cannot be undone.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
