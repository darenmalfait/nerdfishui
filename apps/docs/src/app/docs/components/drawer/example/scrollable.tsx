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

export function DrawerScrollableExample() {
	return (
		<div className="flex flex-col space-y-4">
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline">Open</Button>
				</DrawerTrigger>
				<DrawerContent className="w-full">
					<DrawerHeader>
						<DrawerTitle>Lots of content</DrawerTitle>
						<DrawerDescription>
							Scroll down to see more content.
						</DrawerDescription>
					</DrawerHeader>
					<div className="px-md space-y-md">
						<p>
							Cats are fascinating creatures that have been domesticated for
							thousands of years. These graceful felines have evolved from wild
							hunters to beloved household companions, while maintaining their
							independent nature and hunting instincts. Their ability to form
							strong bonds with humans while retaining their distinctive
							personalities makes them uniquely captivating pets.
						</p>
						<p>
							The remarkable agility and physical capabilities of cats never
							cease to amaze. Their flexible spine, powerful muscles, and
							incredible balance allow them to perform astounding acrobatic
							feats. From their ability to always land on their feet to their
							capacity to squeeze through tiny spaces, cats possess an array of
							impressive physical attributes that have fascinated humans
							throughout history.
						</p>
						<p>
							Perhaps most endearing is the way cats communicate and express
							themselves. From their gentle purrs of contentment to their
							expressive tail movements, cats have developed sophisticated ways
							to interact with their human companions. Their mysterious
							behaviors, such as kneading with their paws or bringing
							&quot;gifts&quot; to their owners, continue to intrigue and
							delight cat lovers around the world.
						</p>
						<p>
							Cats are fascinating creatures that have been domesticated for
							thousands of years. These graceful felines have evolved from wild
							hunters to beloved household companions, while maintaining their
							independent nature and hunting instincts. Their ability to form
							strong bonds with humans while retaining their distinctive
							personalities makes them uniquely captivating pets.
						</p>
						<p>
							The remarkable agility and physical capabilities of cats never
							cease to amaze. Their flexible spine, powerful muscles, and
							incredible balance allow them to perform astounding acrobatic
							feats. From their ability to always land on their feet to their
							capacity to squeeze through tiny spaces, cats possess an array of
							impressive physical attributes that have fascinated humans
							throughout history.
						</p>
						<p>
							Perhaps most endearing is the way cats communicate and express
							themselves. From their gentle purrs of contentment to their
							expressive tail movements, cats have developed sophisticated ways
							to interact with their human companions. Their mysterious
							behaviors, such as kneading with their paws or bringing
							&quot;gifts&quot; to their owners, continue to intrigue and
							delight cat lovers around the world.
						</p>
						<p>
							Cats are fascinating creatures that have been domesticated for
							thousands of years. These graceful felines have evolved from wild
							hunters to beloved household companions, while maintaining their
							independent nature and hunting instincts. Their ability to form
							strong bonds with humans while retaining their distinctive
							personalities makes them uniquely captivating pets.
						</p>
						<p>
							The remarkable agility and physical capabilities of cats never
							cease to amaze. Their flexible spine, powerful muscles, and
							incredible balance allow them to perform astounding acrobatic
							feats. From their ability to always land on their feet to their
							capacity to squeeze through tiny spaces, cats possess an array of
							impressive physical attributes that have fascinated humans
							throughout history.
						</p>
						<p>
							Perhaps most endearing is the way cats communicate and express
							themselves. From their gentle purrs of contentment to their
							expressive tail movements, cats have developed sophisticated ways
							to interact with their human companions. Their mysterious
							behaviors, such as kneading with their paws or bringing
							&quot;gifts&quot; to their owners, continue to intrigue and
							delight cat lovers around the world.
						</p>
						<p>
							Cats are fascinating creatures that have been domesticated for
							thousands of years. These graceful felines have evolved from wild
							hunters to beloved household companions, while maintaining their
							independent nature and hunting instincts. Their ability to form
							strong bonds with humans while retaining their distinctive
							personalities makes them uniquely captivating pets.
						</p>
						<p>
							The remarkable agility and physical capabilities of cats never
							cease to amaze. Their flexible spine, powerful muscles, and
							incredible balance allow them to perform astounding acrobatic
							feats. From their ability to always land on their feet to their
							capacity to squeeze through tiny spaces, cats possess an array of
							impressive physical attributes that have fascinated humans
							throughout history.
						</p>
						<p>
							Perhaps most endearing is the way cats communicate and express
							themselves. From their gentle purrs of contentment to their
							expressive tail movements, cats have developed sophisticated ways
							to interact with their human companions. Their mysterious
							behaviors, such as kneading with their paws or bringing
							&quot;gifts&quot; to their owners, continue to intrigue and
							delight cat lovers around the world.
						</p>
					</div>
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
