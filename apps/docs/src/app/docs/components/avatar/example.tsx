'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@nerdfish/ui'

export function AvatarExample() {
	return (
		<Avatar>
			<AvatarImage
				src="https://avatars.githubusercontent.com/u/56068461?s=40&v=4"
				alt="@darenmalfait"
			/>
			<AvatarFallback>DM</AvatarFallback>
		</Avatar>
	)
}
