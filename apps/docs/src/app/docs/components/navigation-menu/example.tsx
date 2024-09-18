'use client'

import {
	getNavigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import * as React from 'react'

const recipes: { title: string; href: string; description: string }[] = [
	{
		title: 'Spaghetti Carbonara',
		href: '/',
		description:
			'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
	},
	{
		title: 'Caesar Salad',
		href: '/',
		description:
			'A fresh salad with romaine lettuce, croutons, and Caesar dressing.',
	},
	{
		title: 'Chocolate Cake',
		href: '/',
		description:
			'A rich and moist chocolate cake, perfect for any celebration.',
	},
	{
		title: 'Garlic Bread',
		href: '/',
		description: 'Crispy and buttery bread with a delicious garlic flavor.',
	},
	{
		title: 'Beef Tacos',
		href: '/',
		description:
			'Flavorful beef tacos served with fresh toppings and a soft tortilla.',
	},
	{
		title: 'Lemonade',
		href: '/',
		description:
			'A refreshing drink made from freshly squeezed lemons, sugar, and water.',
	},
]

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cx(
						'hover:bg-muted focus:bg-muted block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors',
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-muted line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'

export function NavigationMenuExample() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
							<ListItem href="/recipes" title="Introduction">
								Discover a variety of delicious recipes to try at home.
							</ListItem>
							<ListItem href="/recipes/installation" title="Kitchen Setup">
								How to set up your kitchen and gather necessary tools.
							</ListItem>
							<ListItem href="/recipes/tips" title="Cooking Tips">
								Essential tips and tricks for improving your cooking skills.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{recipes.map((recipe) => (
								<ListItem
									key={recipe.title}
									title={recipe.title}
									href={recipe.href}
								>
									{recipe.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/recipes" legacyBehavior passHref>
						<NavigationMenuLink className={getNavigationMenuTriggerStyle()}>
							All Recipes
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
