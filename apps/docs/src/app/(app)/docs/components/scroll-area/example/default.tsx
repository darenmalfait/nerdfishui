'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Badge } from '@nerdfish/react/badge'
import { Button } from '@nerdfish/react/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@nerdfish/react/card'
import { ScrollArea } from '@nerdfish/react/scroll-area'
import Link from 'next/link'

// User data
const users = [
	{
		id: '1',
		name: 'Kathryn Campbell',
		availability: 'online',
		avatar: '1.png',
		status: 'active',
		email: 'kathryn@apple.com',
	},
	{
		id: '2',
		name: 'Robert Smith',
		availability: 'away',
		avatar: '2.png',
		status: 'inactive',
		email: 'robert@openai.com',
	},
	{
		id: '3',
		name: 'Sophia Johnson',
		availability: 'busy',
		avatar: '3.png',
		status: 'active',
		email: 'sophia@meta.com',
	},
	{
		id: '4',
		name: 'Lucas Walker',
		availability: 'offline',
		avatar: '4.png',
		status: 'inactive',
		email: 'lucas@tesla.com',
	},
	{
		id: '5',
		name: 'Emily Davis',
		availability: 'online',
		avatar: '5.png',
		status: 'active',
		email: 'emily@sap.com',
	},
	{
		id: '6',
		name: 'Michael Brown',
		availability: 'online',
		avatar: '6.png',
		status: 'active',
		email: 'michael@amazon.com',
	},
	{
		id: '7',
		name: 'Jessica Lee',
		availability: 'away',
		avatar: '7.png',
		status: 'inactive',
		email: 'jessica@google.com',
	},
	{
		id: '8',
		name: 'David Wilson',
		availability: 'busy',
		avatar: '8.png',
		status: 'active',
		email: 'david@microsoft.com',
	},
	{
		id: '9',
		name: 'Sarah Taylor',
		availability: 'offline',
		avatar: '9.png',
		status: 'inactive',
		email: 'sarah@ibm.com',
	},
	{
		id: '10',
		name: 'James Anderson',
		availability: 'online',
		avatar: '10.png',
		status: 'active',
		email: 'james@oracle.com',
	},
]

export function ScrollAreaExample() {
	return (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle>Recent Users</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[300px] pe-3.5">
					{users.map((user) => {
						return (
							<div
								key={user.id}
								className="gap-best-friends py-best-friends flex items-center justify-between border-b border-dashed last:border-none"
							>
								<div className="gap-friends flex items-center">
									<Avatar className="size-8">
										<AvatarImage
											src={`/media/avatars/${user.avatar}`}
											alt={user.name}
										/>
										<AvatarFallback>N</AvatarFallback>
									</Avatar>
									<div>
										<Link
											href="#"
											className="text-foreground hover:text-primary text-sm font-medium"
										>
											{user.name}
										</Link>
										<div className="text-muted-foreground text-sm font-normal">
											{user.email}
										</div>
									</div>
								</div>
								{/* Right: Status Badge */}
								<Badge
									variant={user.status === 'active' ? 'default' : 'outline'}
								>
									{user.status.charAt(0).toUpperCase() + user.status.slice(1)}
								</Badge>
							</div>
						)
					})}
				</ScrollArea>
			</CardContent>
			<CardFooter className="justify-center">
				<Button
					size="sm"
					variant="link"
					render={<Link href="#">Learn more</Link>}
				/>
			</CardFooter>
		</Card>
	)
}
