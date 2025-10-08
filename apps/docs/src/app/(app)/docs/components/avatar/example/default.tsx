'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'

export function AvatarExample() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-12">
			<Avatar>
				<AvatarImage
					src="https://avatars.githubusercontent.com/u/56068461?v=4"
					alt="@nerdfish"
				/>
				<AvatarFallback>NF</AvatarFallback>
			</Avatar>
			<Avatar className="rounded-compact">
				<AvatarImage
					src="https://avatars.githubusercontent.com/u/56068461?v=4"
					alt="@nerdfish"
				/>
				<AvatarFallback>NF</AvatarFallback>
			</Avatar>
			<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
				<Avatar>
					<AvatarImage
						src="https://avatars.githubusercontent.com/u/56068461?v=4"
						alt="@nerdfish"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage
						src="https://avatars.githubusercontent.com/u/56068461?v=4"
						alt="@maxleiter"
					/>
					<AvatarFallback>NF</AvatarFallback>
				</Avatar>
				<Avatar>
					<AvatarImage
						src="https://avatars.githubusercontent.com/u/56068461?v=4"
						alt="@nerdfish"
					/>
					<AvatarFallback>NF</AvatarFallback>
				</Avatar>
			</div>
		</div>
	)
}
