'use client'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	H2,
	Paragraph,
	Skeleton,
} from '@nerdfish/ui'
import * as React from 'react'

export function SkeletonExample() {
	const [loading, setLoading] = React.useState(true)

	return (
		<div className="flex flex-col items-center space-y-4">
			<Button onClick={() => setLoading(!loading)}>Toggle</Button>

			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>
						<H2>{loading ? <Skeleton className="w-[250px]" /> : 'Title'}</H2>
					</CardTitle>
					<CardDescription className="text-sm">
						{loading ? <Skeleton className="w-[200px]" /> : 'Description'}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Paragraph>
						{loading ? (
							<Skeleton count={4} />
						) : (
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
						)}
					</Paragraph>
				</CardContent>
			</Card>
		</div>
	)
}
