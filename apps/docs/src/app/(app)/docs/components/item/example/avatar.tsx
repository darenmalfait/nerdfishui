'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Button } from '@nerdfish/react/button'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from '@nerdfish/react/item'
import { PlusIcon } from 'lucide-react'

export function ItemAvatarExample() {
	return (
		<div className="gap-casual flex w-full flex-col">
			<Item variant="outline">
				<ItemMedia>
					<Avatar className="size-10">
						<AvatarImage src="https://avatars.githubusercontent.com/u/56068461?v=4" />
						<AvatarFallback>ER</AvatarFallback>
					</Avatar>
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Evil Rabbit</ItemTitle>
					<ItemDescription>Last seen 5 months ago</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button
						icon
						size="sm"
						variant="outline"
						className="rounded-full"
						aria-label="Invite"
					>
						<PlusIcon />
					</Button>
				</ItemActions>
			</Item>
			<Item variant="outline">
				<ItemMedia>
					<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
						<Avatar className="hidden sm:flex">
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/56068461?v=4"
								alt="@nerdfish"
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="hidden sm:flex">
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/56068461?v=4"
								alt="@nerdfish"
							/>
							<AvatarFallback>LR</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/56068461?v=4"
								alt="@nerdfish"
							/>
							<AvatarFallback>ER</AvatarFallback>
						</Avatar>
					</div>
				</ItemMedia>
				<ItemContent>
					<ItemTitle>No Team Members</ItemTitle>
					<ItemDescription>
						Invite your team to collaborate on this project.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button size="sm" variant="outline">
						Invite
					</Button>
				</ItemActions>
			</Item>
		</div>
	)
}
