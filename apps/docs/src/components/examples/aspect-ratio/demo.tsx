'use client'

import { AspectRatio } from '@nerdfish/ui'
import Image from 'next/image'

export function AspectRatioDemo() {
	return (
		<div className="w-[450px]">
			<AspectRatio ratio={16 / 9}>
				<Image
					src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
					alt="Photo by Alvaro Pinot"
					fill
					className="rounded-md object-cover"
				/>
			</AspectRatio>
		</div>
	)
}
