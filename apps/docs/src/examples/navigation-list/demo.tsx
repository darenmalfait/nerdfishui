'use client'

import {
	NavigationList,
	NavigationListSection,
	NavigationListTitle,
	NavigationListItem,
} from '@nerdfish/ui'
import { ChevronRightIcon, UserIcon } from 'lucide-react'

export function NavigationListDemo() {
	return (
		<NavigationList>
			<NavigationListSection>
				<NavigationListTitle title="Cakes" />
				<NavigationListItem
					href="https://www.nerdfish.be"
					title="Chocolate Cake"
					icon={UserIcon}
				/>
				<NavigationListItem
					as="button"
					onClick={() => console.info('click')}
					title="Strawberry Shortcake"
					icon={UserIcon}
					active
				/>
			</NavigationListSection>
			<NavigationListSection>
				<NavigationListTitle title="Cupcakes" icon={ChevronRightIcon} />
				<NavigationListItem title="Carrot Cake" />
				<NavigationListItem title="Red Velvet Cake" />
			</NavigationListSection>
			<NavigationListItem title="Vanilla Cake" />
			<NavigationListItem title="Lemon Cake" />
		</NavigationList>
	)
}
