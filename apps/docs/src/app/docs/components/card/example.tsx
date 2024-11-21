'use client'

import {
	Button,
	Card,
	Switch,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	type CardProps,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { BellRing, Check } from 'lucide-react'
import * as React from 'react'

const notifications = [
	{
		title: 'Your cake has been awarded.',
		description: '1 hour ago',
	},
	{
		title: 'You have a new cake recipe!',
		description: '1 hour ago',
	},
	{
		title: 'Your subscription to the cake club is expiring soon!',
		description: '2 hours ago',
	},
]

export function CardExample({ className, ...props }: CardProps) {
	return (
		<Card className={cx('w-[380px]', className)} {...props}>
			<CardHeader>
				<CardTitle>Cake Notifications</CardTitle>
				<CardDescription>You have 3 unread cake messages.</CardDescription>
			</CardHeader>
			<CardContent className="gap-md grid">
				<div className="rounded-large p-md space-x-md flex items-center border">
					<BellRing />
					<div className="space-y-sm flex-1">
						<p className="text-sm font-medium leading-none">
							Push Notifications
						</p>
						<p className="text-muted text-sm">Send notifications to device.</p>
					</div>
					<Switch />
				</div>
				<div>
					{notifications.map((notification, index) => (
						<div
							key={index}
							className="pb-sm mb-md grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0"
						>
							<span className="flex size-2 translate-y-1 rounded-full bg-sky-500" />
							<div className="space-y-sm">
								<p className="text-sm font-medium leading-none">
									{notification.title}
								</p>
								<p className="text-muted text-sm">{notification.description}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Check className="mr-sm size-4" /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
	)
}
