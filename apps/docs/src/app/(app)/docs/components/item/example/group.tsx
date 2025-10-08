'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Button } from '@nerdfish/react/button'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemSeparator,
	ItemTitle,
} from '@nerdfish/react/item'
import { PlusIcon } from 'lucide-react'
import * as React from 'react'

const people = [
	{
		username: 'nerdfish',
		avatar: 'https://avatars.githubusercontent.com/u/56068461?v=4',
		email: 'test@test.com',
	},
	{
		username: 'nerdfish1',
		avatar: 'https://avatars.githubusercontent.com/u/56068461?v=4',
		email: 'test@test.com',
	},
	{
		username: 'nerdfish2',
		avatar: 'https://avatars.githubusercontent.com/u/56068461?v=4',
		email: 'test@test.com',
	},
]

export function ItemGroupExample() {
	return (
		<div className="gap-casual flex w-full flex-col">
			<ItemGroup>
				{people.map((person, index) => (
					<React.Fragment key={person.username}>
						<Item>
							<ItemMedia>
								<Avatar>
									<AvatarImage src={person.avatar} className="grayscale" />
									<AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
								</Avatar>
							</ItemMedia>
							<ItemContent className="gap-bff">
								<ItemTitle>{person.username}</ItemTitle>
								<ItemDescription>{person.email}</ItemDescription>
							</ItemContent>
							<ItemActions>
								<Button variant="ghost" icon className="rounded-full">
									<PlusIcon />
								</Button>
							</ItemActions>
						</Item>
						{index !== people.length - 1 ? <ItemSeparator /> : null}
					</React.Fragment>
				))}
			</ItemGroup>
		</div>
	)
}
