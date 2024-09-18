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
			<CardContent className="grid gap-4">
				<div className="flex items-center space-x-4 rounded-lg border p-4">
					<BellRing />
					<div className="flex-1 space-y-1">
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
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<span className="flex size-2 translate-y-1 rounded-full bg-sky-500" />
							<div className="space-y-1">
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
					<Check className="mr-2 size-4" /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
	)
}
