'use client'

import { NavigationList } from '@nerdfish/ui'
import { ChevronRightIcon, UserIcon } from 'lucide-react'

export function NavigationListDemo() {
	return (
		<NavigationList.Root>
			<NavigationList.Section>
				<NavigationList.Title title="Cakes" />
				<NavigationList.Item
					href="https://www.nerdfish.be"
					title="Chocolate Cake"
					icon={UserIcon}
				/>
				<NavigationList.Item
					as="button"
					onClick={() => console.info('click')}
					title="Strawberry Shortcake"
					icon={UserIcon}
					active
				/>
			</NavigationList.Section>
			<NavigationList.Section>
				<NavigationList.Title title="Cupcakes" icon={ChevronRightIcon} />
				<NavigationList.Item title="Carrot Cake" />
				<NavigationList.Item title="Red Velvet Cake" />
			</NavigationList.Section>
			<NavigationList.Item title="Vanilla Cake" />
			<NavigationList.Item title="Lemon Cake" />
		</NavigationList.Root>
	)
}
