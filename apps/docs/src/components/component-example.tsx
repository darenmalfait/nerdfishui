'use client'

import { Resizable } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

function Preview({ children }: { children: React.ReactNode }) {
	return (
		<Resizable.Root direction="horizontal">
			<Resizable.Panel
				className="shadow-outline min-h-[350px] p-4"
				defaultSize={100}
			>
				{children}
			</Resizable.Panel>
			<Resizable.Handle />
			<Resizable.Panel className="min-h-[350px]" defaultSize={0} />
		</Resizable.Root>
	)
}

export function ComponentExample({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [Example, Code, ...Children] = React.Children.toArray(
		children,
	) as React.ReactElement[]

	return (
		<div {...props} className={cx('flex flex-col gap-4', className)}>
			<div className="!bg-primary p-0">
				<Preview>
					<div className="dark">{Example}</div>
				</Preview>
			</div>
			<div className="!bg-primary -my-2 p-0">
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
			</div>
		</div>
	)
}
