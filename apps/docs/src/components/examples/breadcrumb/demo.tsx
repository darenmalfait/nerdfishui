'use client'

import { Breadcrumb, DropdownMenu } from '@nerdfish/ui'

export function BreadcrumbDemo() {
	return (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<DropdownMenu>
						<DropdownMenu.Trigger className="flex items-center gap-1">
							<Breadcrumb.Ellipsis className="size-4" />
							<span className="sr-only">Toggle menu</span>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="start">
							<DropdownMenu.Item>Documentation</DropdownMenu.Item>
							<DropdownMenu.Item>Themes</DropdownMenu.Item>
							<DropdownMenu.Item>GitHub</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	)
}
