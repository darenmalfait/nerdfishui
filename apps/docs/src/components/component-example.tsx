'use client'

import { Tabs } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function ComponentExample({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [Example, Code, ...Children] = React.Children.toArray(
		children,
	) as React.ReactElement[]

	return (
		<div
			className={cx('relative my-4 flex flex-col space-y-2', className)}
			{...props}
		>
			<Tabs.Root defaultValue="preview" className="mr-auto w-full">
				<div className="flex items-center justify-between">
					<Tabs.List>
						<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
						<Tabs.Trigger value="code">Code</Tabs.Trigger>
					</Tabs.List>
				</div>
				<Tabs.Content
					value="preview"
					className="!bg-primary shadow-outline p-0"
				>
					<div className="flex min-h-[350px] items-center justify-center p-10">
						{Example}
					</div>
				</Tabs.Content>
				<Tabs.Content value="code" className="!bg-primary -my-2 p-0">
					<div className="flex flex-col space-y-4">
						<div className="relative w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
							{Code}
						</div>

						{Children.length ? (
							<div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
								{Children}
							</div>
						) : null}
					</div>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}
