'use client'

import { Avatar } from '@nerdfish/ui'

export function AvatarDemo() {
	return (
		<Avatar.Root>
			<Avatar.Image
				src="https://avatars.githubusercontent.com/u/56068461?s=40&v=4"
				alt="@darenmalfait"
			/>
			<Avatar.Fallback>DM</Avatar.Fallback>
		</Avatar.Root>
	)
}
