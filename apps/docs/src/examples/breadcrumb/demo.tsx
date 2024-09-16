'use client'

import {
	Breadcrumb,
	DropdownMenu,
	BreadcrumbLink,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
	BreadcrumbList,
	BreadcrumbPage,
} from '@nerdfish/ui'

export function BreadcrumbDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="size-4" />
							<span className="sr-only">Toggle menu</span>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="start">
							<DropdownMenu.Item>Documentation</DropdownMenu.Item>
							<DropdownMenu.Item>Themes</DropdownMenu.Item>
							<DropdownMenu.Item>GitHub</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
