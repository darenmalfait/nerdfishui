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
						<p className="text-muted-foreground text-xs font-medium">
							{username}
						</p>
					</div>
				</div>
				<blockquote className="text-econdary-foreground mt-3 text-sm">
					{body}
				</blockquote>
			</CardContent>
		</Card>
	)
}

export function MarqueeVerticalExample() {
	return (
		<div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-1.5 overflow-hidden">
			{/* Vertical Marquee (downwards) */}
			<Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
				{testimonials.map((review) => (
					<TestimonialCard key={review.username} {...review} />
				))}
			</Marquee>
			{/* Vertical Marquee (upwards) */}
			<Marquee
				vertical
				pauseOnHover
				reverse
				repeat={3}
				className="[--duration:40s]"
			>
				{testimonials.map((review) => (
					<TestimonialCard key={review.username} {...review} />
				))}
			</Marquee>
			{/* Gradient overlays for vertical marquee */}
			<div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b" />
			<div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" />
		</div>
	)
}
