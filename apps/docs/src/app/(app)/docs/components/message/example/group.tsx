'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Bubble, BubbleContent } from '@nerdfish/react/bubble'
import {
	Message,
	MessageAvatar,
	MessageContent,
	MessageGroup,
} from '@nerdfish/react/message'

export function MessageGroupExample() {
	return (
		<div className="py-casual mx-auto flex w-full max-w-sm flex-col">
			<MessageGroup>
				<Message>
					<MessageAvatar />
					<MessageContent>
						<Bubble variant="muted">
							<BubbleContent>I checked the registry addresses.</BubbleContent>
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
							<BubbleContent>
								The component and example JSON now live under the UI registry.
							</BubbleContent>
						</Bubble>
					</MessageContent>
				</Message>
			</MessageGroup>
		</div>
	)
}
