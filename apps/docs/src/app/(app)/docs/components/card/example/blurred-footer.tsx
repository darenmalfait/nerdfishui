'use client'

import { Button } from '@nerdfish/react/button'
import { Card, CardFooter } from '@nerdfish/react/card'
import Image from 'next/image'

export function CardBlurredFooterExample() {
	return (
		<Card className="relative max-w-sm border-none">
			<Image
				alt="Woman listing to music"
				className="rounded-container size-full object-cover"
				height={200}
				src="https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
				width={200}
			/>
			<CardFooter className="bg-blurred bottom-casual mx-best-friends p-best-friends rounded-[calc(var(--radius-container)-theme(padding.best-friends))] absolute right-0 left-0 flex justify-between">
				<p className="text-tiny text-white/80">Available soon.</p>
				<Button
					className="bg-blurred! border-border text-white shadow-md"
					size="sm"
				>
					Notify me
				</Button>
			</CardFooter>
		</Card>
	)
}
