'use client'

import {
	AspectRatio,
	Button,
	H2,
	H3,
	NavigationList,
	NavigationListItem,
	NavigationListTitle,
	Paragraph,
	ScrollArea,
	ScrollBar,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import {
	ChefHat,
	Grid as GridIcon,
	History,
	User,
	Utensils,
} from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

interface Album {
	name: string
	artist: string
	cover: string
}

const highlighted: Album[] = [
	{
		name: 'Authumn Soup',
		artist: 'Cala',
		cover:
			'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=300&dpr=2&q=80',
	},
	{
		name: 'Veggy Burger',
		artist: 'Deryn Macey',
		cover:
			'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=300&dpr=2&q=80',
	},
	{
		name: 'Homemade brownies',
		artist: 'Alena Ganzhela',
		cover:
			'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=300&dpr=2&q=80',
	},
	{
		name: 'Mozarella Stick',
		artist: 'gladys arivia',
		cover:
			'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&dpr=2&q=80',
	},
]

const madeForYouAlbums: Album[] = [
	{
		name: 'Salad bowl',
		artist: 'Anna Pelzer',
		cover:
			'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&dpr=2&q=80',
	},
	{
		name: 'Eggplant and tomato bruschetta',
		artist: 'Mariana Medvedeva',
		cover:
			'https://images.unsplash.com/photo-1505575967455-40e256f73376?w=300&dpr=2&q=80',
	},
	{
		name: 'Banana cake',
		artist: 'Alex Lvrs',
		cover:
			'https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=300&dpr=2&q=80',
	},
	{
		name: 'Cauliflower',
		artist: 'Jennifer Schmidt',
		cover:
			'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?w=300&dpr=2&q=80',
	},
	{
		name: 'Authumn Soup',
		artist: 'Cala',
		cover:
			'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=300&dpr=2&q=80',
	},
	{
		name: 'Veggy Burger',
		artist: 'Deryn Macey',
		cover:
			'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=300&dpr=2&q=80',
	},
	{
		name: 'Homemade brownies',
		artist: 'Alena Ganzhela',
		cover:
			'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=300&dpr=2&q=80',
	},
	{
		name: 'Mozarella Stick',
		artist: 'gladys arivia',
		cover:
			'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&dpr=2&q=80',
	},
]

function AppDemo() {
	return (
		<div className="bg-accent hidden rounded-3xl xl:block">
			<div className="p-8">
				<div className="bg-primary overflow-hidden rounded-3xl shadow-2xl transition-all">
					<div className="grid grid-cols-4 xl:grid-cols-5">
						<aside className="bg-muted pb-12 pr-2">
							<div className="mb-8 px-8 pt-6">
								<p className="flex items-center text-2xl font-semibold tracking-tight">
									<ChefHat className="mr-2" />
									Chef
								</p>
							</div>
							<div className="space-y-4">
								<div className="px-3">
									<NavigationList className="space-y-1">
										<NavigationListTitle title="Discover" />
										<NavigationListItem
											icon={Utensils}
											title="Start Cooking"
											active
										/>
										<NavigationListItem icon={GridIcon} title="Browse" />
									</NavigationList>
								</div>
								<div className="px-3 py-2">
									<NavigationList>
										<NavigationListTitle title="Library" />
										<NavigationListItem icon={History} title="History" />
										<NavigationListItem icon={User} title="Your uploads" />
									</NavigationList>
								</div>
							</div>
						</aside>
						<div className="col-span-3 border-l border-l-gray-200 xl:col-span-4 dark:border-l-gray-700">
							<div className="px-8 py-6">
								<Tabs defaultValue="recipes" className="h-full space-y-6">
									<div className="space-between flex items-center">
										<TabsList>
											<TabsTrigger value="recipes" className="relative">
												Recipes
											</TabsTrigger>
											<TabsTrigger value="ingredients">Ingredients</TabsTrigger>
										</TabsList>
									</div>
									<TabsContent value="recipes" className="shadow-none">
										<div className="mb-2 flex items-center justify-between">
											<div className="space-y-1">
												<H2>Start Cooking</H2>
												<Paragraph>
													Delicious picks for you. Updated daily.
												</Paragraph>
											</div>
										</div>

										<div className="relative">
											<div className="relative flex space-x-4">
												{highlighted.map((album) => (
													<AlbumArtwork
														key={album.name}
														album={album}
														className="w-[250px]"
													/>
												))}
											</div>
										</div>
										<div className="mb-2 mt-6 space-y-1">
											<H2>Made for You</H2>
											<Paragraph>
												Your personal playlists. Updated daily.
											</Paragraph>
										</div>
										<div className="relative">
											<ScrollArea className="-ml-4">
												<div className="flex space-x-4 py-2 pb-4 pl-4">
													{madeForYouAlbums.map((album) => (
														<AlbumArtwork
															key={album.name}
															album={album}
															className="w-[150px]"
															aspectRatio="square"
														/>
													))}
												</div>
												<ScrollBar orientation="horizontal" />
											</ScrollArea>
										</div>
									</TabsContent>
									<TabsContent
										value="ingredients"
										className="h-full min-h-0 flex-col border-none data-[state=active]:flex"
									>
										<div className="mb-2 flex min-h-0 items-center justify-between">
											<div className="space-y-1">
												<H2>Ingredients</H2>
												<Paragraph>
													Find meals based on the ingredients you have.
												</Paragraph>
											</div>
										</div>
										<div className="border-muted flex h-[450px] min-h-0 shrink-0 items-center justify-center rounded-3xl border border-dashed">
											<div className="mx-auto flex min-h-0 max-w-[420px] flex-col items-center justify-center text-center">
												<Paragraph className="text-muted mb-4 mt-2 text-sm">
													You have no ingredients added. Add ingredients to
												</Paragraph>
												<Button>Add Ingredient</Button>
											</div>
										</div>
									</TabsContent>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
	album: Album
	aspectRatio?: 'square' | 'portrait'
}

function AlbumArtwork({
	album,
	aspectRatio = 'portrait',
	className,
	...props
}: AlbumArtworkProps) {
	return (
		<div className={cx('group space-y-3', className)} {...props}>
			<div className="rounded-3xl object-cover">
				<AspectRatio ratio={aspectRatio === 'square' ? 1 : 3 / 4}>
					<Image
						src={album.cover}
						alt={album.name}
						fill
						className="focus-ring object-cover transition-all"
					/>
				</AspectRatio>
			</div>
			<div className="space-y-1 text-sm">
				<H3 className="font-medium leading-none">{album.name}</H3>
				<Paragraph className="text-muted text-xs">{album.artist}</Paragraph>
			</div>
		</div>
	)
}

export { AppDemo }
