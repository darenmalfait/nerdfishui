'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	LoadingAnimation,
	type LoadingAnimationProps,
} from '@nerdfish/ui'

function AnimationVariant({
	variant,
}: {
	variant: LoadingAnimationProps['variant']
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{variant}</CardTitle>
			</CardHeader>
			<CardContent className="p-md flex justify-center">
				<LoadingAnimation variant={variant} />
			</CardContent>
		</Card>
	)
}

export function LoadingAnimationVariantsExample() {
	return (
		<div className="gap-md grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<AnimationVariant variant="classic" />
			<AnimationVariant variant="square" />
			<AnimationVariant variant="squareFull" />
			<AnimationVariant variant="infinite" />
			<AnimationVariant variant="bars" />
			<AnimationVariant variant="ellipsis" />
			<AnimationVariant variant="ring" />
			<AnimationVariant variant="circleFilled" />
		</div>
	)
}
