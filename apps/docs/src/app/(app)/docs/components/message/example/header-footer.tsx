'use client'

import { Bubble, BubbleContent } from '@nerdfish/react/bubble'
import {
	Message,
	MessageContent,
	MessageFooter,
	MessageHeader,
} from '@nerdfish/react/message'

export function MessageHeaderFooterExample() {
	return (
		<div className="gap-casual py-casual mx-auto flex w-full max-w-sm flex-col">
			<Message>
				<MessageContent>
					<MessageHeader>Olivia</MessageHeader>
					<Bubble variant="muted">
						<BubbleContent>I already checked the logs.</BubbleContent>
					</Bubble>
				</MessageContent>
			</Message>
			<Message align="end">
				<MessageContent>
					<Bubble>
						<BubbleContent>
							Send the report to the team. Ping @nerdfish if you need help.
						</BubbleContent>
					</Bubble>
					<MessageFooter>
						Read <span className="font-normal">Yesterday</span>
					</MessageFooter>
				</MessageContent>
			</Message>
		</div>
	)
}
