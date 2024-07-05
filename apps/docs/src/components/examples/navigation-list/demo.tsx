'use client'

import { NavigationList } from '@nerdfish/ui'
import * as React from 'react'
import { Icons } from '~/components/icons'

export function NavigationListDemo() {
	return (
		<NavigationList>
			<NavigationList.Section>
				<NavigationList.Title title="Cakes" />
				<NavigationList.Item
					href="https://www.nerdfish.be"
					title="Chocolate Cake"
					icon={Icons.User}
				/>
				<NavigationList.Item
					as="button"
					onClick={() => console.info('click')}
					title="Strawberry Shortcake"
					icon={Icons.User}
					active
				/>
			</NavigationList.Section>
			<NavigationList.Section>
				<NavigationList.Title title="Cupcakes" icon={Icons.ChevronRight} />
				<NavigationList.Item title="Carrot Cake" />
				<NavigationList.Item title="Red Velvet Cake" />
			</NavigationList.Section>
			<NavigationList.Item title="Vanilla Cake" />
			<NavigationList.Item title="Lemon Cake" />
		</NavigationList>
	)
}
