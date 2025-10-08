'use client'
import { AspectRatio } from '@nerdfish/react/aspect-ratio'
import Image from 'next/image'

export function AspectRatioExample() {
	return (
		<AspectRatio
			ratio={16 / 9}
			className="bg-background-muted rounded-base w-full md:min-w-[500px]"
		>
			<Image
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				fill
				className="rounded-base h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
			/>
		</AspectRatio>
	)
}
