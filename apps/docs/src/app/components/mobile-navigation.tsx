'use client'

import { Button, Drawer } from '@nerdfish/ui'
import { useMobileNav } from '../mobile-nav-provider'
import { ComponentNavigation } from './component-navigation'
import { Icons } from './icons'

export function MobileNavigation() {
	const { isOpen, toggle, close } = useMobileNav()

	return (
		<>
			<Button
				size="icon"
				variant="ghost"
				type="button"
				className="md:hidden"
				aria-label="Toggle navigation"
				onClick={toggle}
			>
				<Icons.Menu className="text-primary size-4" />
			</Button>
			<Drawer.Root
				direction="left"
				open={isOpen}
				onOpenChange={(open) => {
					if (!open) close()
				}}
			>
				<Drawer.Overlay />
				<Drawer.Content className="!w-full max-w-[300px] px-4">
					<ComponentNavigation />
				</Drawer.Content>
			</Drawer.Root>
		</>
	)
}
