'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Bubble, BubbleContent } from '@nerdfish/react/bubble'
import { Marker, MarkerContent } from '@nerdfish/react/marker'
import {
	Message,
	MessageAvatar,
	MessageContent,
	MessageFooter,
} from '@nerdfish/react/message'

export function MessageExample() {
	return (
		<div className="gap-casual py-casual mx-auto flex w-full max-w-sm flex-col">
			<Message align="end">
				<MessageAvatar>
					<Avatar className="size-8">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/56068461?v=4"
							alt="@me"
						/>
						<AvatarFallback>ME</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble>
						<BubbleContent>Deploying to prod real quick.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Message>
				<MessageAvatar>
					<Avatar className="size-8">
						<AvatarImage
							src="https://randomuser.me/api/portraits/men/32.jpg"
							alt="@rabbit"
						/>
						<AvatarFallback>R</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble variant="muted">
						<BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Message align="end">
				<MessageAvatar>
					<Avatar className="size-8">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/56068461?v=4"
							alt="@me"
						/>
						<AvatarFallback>ME</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble>
						<BubbleContent>It&apos;s a one-line change.</BubbleContent>
					</Bubble>
					<MessageFooter>Delivered</MessageFooter>
				</MessageContent>
			</Message>
			<Message>
				<MessageAvatar>
					<Avatar className="size-8">
						<AvatarImage
							src="https://randomuser.me/api/portraits/men/32.jpg"
							alt="@rabbit"
						/>
						<AvatarFallback>R</AvatarFallback>
					</Avatar>
				</MessageAvatar>
				<MessageContent>
					<Bubble variant="muted">
						<BubbleContent>It&apos;s always a one-line change.</BubbleContent>
					</Bubble>
					<Bubble variant="muted">
						<BubbleContent>Alright, let me take a look.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Marker role="status">
				<MarkerContent className="shimmer">
					<span className="font-medium">Oliver</span> is typing...
				</MarkerContent>
			</Marker>
		</div>
	)
}
