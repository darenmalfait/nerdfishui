'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import { Card, CardContent } from '@nerdfish/react/card'
import { Marquee } from '@nerdfish/react/marquee'

// Unique reviews data
const testimonials = [
	{
		name: 'Ava Green',
		username: '@ava',
		body: 'Cascade AI made my workflow 10x faster!',
		img: 'https://randomuser.me/api/portraits/women/32.jpg',
		country: '🇦🇺 Australia',
	},
	{
		name: 'Ana Miller',
		username: '@ana',
		body: 'Vertical marquee is a game changer!',
		img: 'https://randomuser.me/api/portraits/women/68.jpg',
		country: '🇩🇪 Germany',
	},
	{
		name: 'Mateo Rossi',
		username: '@mat',
		body: 'Animations are buttery smooth!',
		img: 'https://randomuser.me/api/portraits/men/51.jpg',
		country: '🇮🇹 Italy',
	},
	{
		name: 'Maya Patel',
		username: '@maya',
		body: 'Setup was a breeze!',
		img: 'https://randomuser.me/api/portraits/women/53.jpg',
		country: '🇮🇳 India',
	},
	{
		name: 'Noah Smith',
		username: '@noah',
		body: 'Best marquee component!',
		img: 'https://randomuser.me/api/portraits/men/33.jpg',
		country: '🇺🇸 USA',
	},
	{
		name: 'Lucas Stone',
		username: '@luc',
		body: 'Very customizable and smooth.',
		img: 'https://randomuser.me/api/portraits/men/22.jpg',
		country: '🇫🇷 France',
	},
	{
		name: 'Haruto Sato',
		username: '@haru',
		body: 'Impressive performance on mobile!',
		img: 'https://randomuser.me/api/portraits/men/85.jpg',
		country: '🇯🇵 Japan',
	},
	{
		name: 'Emma Lee',
		username: '@emma',
		body: 'Love the pause on hover feature!',
		img: 'https://randomuser.me/api/portraits/women/45.jpg',
		country: '🇨🇦 Canada',
	},
	{
		name: 'Carlos Ray',
		username: '@carl',
		body: 'Great for testimonials and logos.',
		img: 'https://randomuser.me/api/portraits/men/61.jpg',
		country: '🇪🇸 Spain',
	},
]

function TestimonialCard({
	img,
	name,
	username,
	body,
	country,
}: (typeof testimonials)[number]) {
	return (
		<Card className="w-64">
			<CardContent>
				<div className="flex items-center gap-2.5">
					<Avatar className="size-9">
						<AvatarImage src={img} alt="@reui_io" />
						<AvatarFallback>{name[0]}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<figcaption className="text-foreground flex items-center gap-1 text-sm font-medium">
							{name} <span className="text-xs">{country}</span>
						</figcaption>
						<p className="text-foreground-muted text-xs font-medium">
							{username}
						</p>
					</div>
				</div>
				<blockquote className="text-foreground mt-3 text-sm">{body}</blockquote>
			</CardContent>
		</Card>
	)
}

export function MarqueeExample() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8">
			{/* Marquee moving left to right (default) */}
			<Marquee pauseOnHover repeat={3} className="[--duration:120s]">
				{testimonials.map((review) => (
					<TestimonialCard key={review.username} {...review} />
				))}
			</Marquee>
			{/* Marquee moving right to left (reverse) */}
			<Marquee pauseOnHover reverse repeat={3} className="[--duration:120s]">
				{testimonials.map((review) => (
					<TestimonialCard key={review.username} {...review} />
				))}
			</Marquee>
			{/* Stylish gradient overlays */}
			<div className="from-background/95 pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r to-transparent" />
			<div className="from-background/95 pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l to-transparent" />
			<div className="from-background/90 pointer-events-none absolute top-0 left-0 h-12 w-full bg-linear-to-b to-transparent" />
			<div className="from-background/90 pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-linear-to-t to-transparent" />
		</div>
	)
}
