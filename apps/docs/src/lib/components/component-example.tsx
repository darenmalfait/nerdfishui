import { Resizable, ResizableHandle, ResizablePanel } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import type * as React from 'react'
import { CopyButton } from './copy-button'

function Preview({ children }: { children: React.ReactNode }) {
	return (
		<Resizable direction="horizontal">
			<ResizablePanel
				className="rounded-container p-md shadow-outline min-h-[350px]"
				defaultSize={100}
			>
				{children}
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel className="min-h-[350px]" defaultSize={0} />
		</Resizable>
	)
}

export function ComponentExample({
	children,
	className,
	component: Component,
}: React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode[]
	component?: React.ReactNode
}) {
	return (
		<div className={cx('mt-md gap-md flex flex-col', className)}>
			{Component ? <Preview>{Component}</Preview> : null}
			<div className="!bg-background -my-sm p-0">
				<div className="space-y-md flex flex-col">
					<div className="rounded-container dark relative w-full [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
						<CopyButton className="top-md" code={children.toString()} />
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
