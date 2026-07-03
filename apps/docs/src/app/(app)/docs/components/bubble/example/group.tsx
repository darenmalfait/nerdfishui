'use client'

import {
	Bubble,
	BubbleContent,
	BubbleGroup,
	BubbleReactions,
} from '@nerdfish/react/bubble'

export function BubbleGroupExample() {
	return (
		<div className="py-casual mx-auto flex w-full max-w-sm flex-col">
			<BubbleGroup>
				<Bubble variant="muted">
					<BubbleContent>Here&apos;s the error from the logs.</BubbleContent>
				</Bubble>
				<Bubble variant="muted">
					<BubbleContent>
						Something went wrong with the build. Try running it again.
					</BubbleContent>
					<BubbleReactions aria-label="Reactions: thumbs up">
						<span>👍</span>
					</BubbleReactions>
				</Bubble>
			</BubbleGroup>
		</div>
	)
}
