'use client'

import { Button, Grid, GridCard } from '@nerdfish/ui'
import { cx, type ExtractProps } from '@nerdfish/utils'
import {
	ArrowRightIcon,
	BellIcon,
	CalendarIcon,
	CookingPotIcon,
	GlobeIcon,
	SearchIcon,
} from 'lucide-react'
import Image from 'next/image'

function CardContent({
	Icon,
	name,
	description,
	cta,
	href,
	backgroundImage,
}: {
	Icon: any
	name: string
	description: string
	cta: string
	href: string
	backgroundImage: string
}) {
	return (
		<>
			<div>
				<div className="absolute inset-0">
					<Image
						alt={name}
						src={backgroundImage}
						className="object-cover"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
			<div className="group-[:not(:hover)]:bg-popover pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
				<Icon className="text-primary size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
				<h3 className="text-primary text-xl font-semibold">{name}</h3>
				<p className="text-muted max-w-lg">{description}</p>
			</div>
			<div
				className={cx(
					'pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
				)}
			>
				<Button
					variant="ghost"
					asChild
					size="sm"
					className="pointer-events-auto"
				>
					<a href={href}>
						{cta}
						<ArrowRightIcon className="ml-2 size-4" />
					</a>
				</Button>
			</div>

			<div className="group-hover:bg-popover pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
		</>
	)
}

const features: (ExtractProps<typeof CardContent> & {
	className: string
})[] = [
	{
		Icon: CookingPotIcon,
		name: 'Save Recipes',
		description: 'We automatically save your recipes as you type.',
		href: '/',
		cta: 'Learn more',
		backgroundImage:
			'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=400&dpr=2&q=80',
		className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
	},
	{
		Icon: SearchIcon,
		name: 'Recipe Search',
		description: 'Search through all your recipes in one place.',
		href: '/',
		cta: 'Learn more',
		backgroundImage:
			'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=300&dpr=2&q=80',
		className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
	},
	{
		Icon: GlobeIcon,
		name: 'Multilingual Recipes',
		description: 'Supports recipes in 100+ languages and counting.',
		href: '/',
		cta: 'Learn more',
		backgroundImage:
			'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=300&dpr=2&q=80',
		className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
	},
	{
		Icon: CalendarIcon,
		name: 'Meal Planner',
		description: 'Use the calendar to plan your meals by date.',
		href: '/',
		cta: 'Learn more',
		backgroundImage:
			'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&dpr=2&q=80',
		className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
	},
	{
		Icon: BellIcon,
		name: 'Cooking Notifications',
		description:
			"Get notified when a new recipe is shared or when it's time to cook.",
		href: '/',
		cta: 'Learn more',
		backgroundImage:
			'https://images.unsplash.com/photo-1505575967455-40e256f73376?w=300&dpr=2&q=80',
		className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
	},
]

export function GridExample() {
	return (
		<div className="flex items-center">
			<Grid className="lg:grid-rows-3">
				{features.map(({ className, ...feature }) => (
					<GridCard key={feature.name} className={className}>
						<CardContent {...feature} />
					</GridCard>
				))}
			</Grid>
		</div>
	)
}
