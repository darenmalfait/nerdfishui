import { Marquee } from '@nerdfish/ui'

const cats = [
	{
		name: 'Whiskers',
		breed: 'Persian',
		description:
			"The fluffiest cat you'll ever meet. Loves napping in sunbeams.",
		img: 'https://avatar.vercel.sh/whiskers',
	},
	{
		name: 'Luna',
		breed: 'Siamese',
		description:
			'Very vocal and always has something to say. Total attention seeker.',
		img: 'https://avatar.vercel.sh/luna',
	},
	{
		name: 'Oliver',
		breed: 'Maine Coon',
		description: 'Gentle giant with a heart of gold. Expert bird watcher.',
		img: 'https://avatar.vercel.sh/oliver',
	},
	{
		name: 'Milo',
		breed: 'Ragdoll',
		description:
			'Goes limp like a ragdoll when picked up. Professional lap warmer.',
		img: 'https://avatar.vercel.sh/milo',
	},
	{
		name: 'Bella',
		breed: 'Scottish Fold',
		description:
			'Those folded ears are irresistible. Master of the puppy eyes.',
		img: 'https://avatar.vercel.sh/bella',
	},
	{
		name: 'Leo',
		breed: 'Bengal',
		description:
			'Wild at heart with spots to match. Endless energy for playtime.',
		img: 'https://avatar.vercel.sh/leo',
	},
]

const firstRow = cats.slice(0, cats.length / 2)
const secondRow = cats.slice(cats.length / 2)

const CatCard = ({
	img,
	name,
	breed,
	description,
}: {
	img: string
	name: string
	breed: string
	description: string
}) => {
	return (
		<figure className="p-md shadow-outline rounded-base relative w-64 cursor-pointer overflow-hidden">
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-primary text-sm font-medium">
						{name}
					</figcaption>
					<p className="text-muted text-xs font-medium">{breed}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{description}</blockquote>
		</figure>
	)
}

export function MarqueeExample() {
	return (
		<div className="bg-primary rounded-base shadow-outline relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
			<Marquee pauseOnHover duration={20000}>
				{firstRow.map((cat) => (
					<CatCard key={cat.breed} {...cat} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover>
				{secondRow.map((cat) => (
					<CatCard key={cat.breed} {...cat} />
				))}
			</Marquee>
		</div>
	)
}
