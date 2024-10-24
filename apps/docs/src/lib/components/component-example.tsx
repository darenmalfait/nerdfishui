import { Resizable, ResizableHandle, ResizablePanel } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { CopyButton } from './copy-button'

function Preview({ children }: { children: React.ReactNode }) {
	return (
		<Resizable direction="horizontal">
			<ResizablePanel
				className="shadow-outline rounded-semi p-md min-h-[350px]"
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
		<div className={cx('gap-md mt-md flex flex-col', className)}>
			{Component ? <Preview>{Component}</Preview> : null}
			<div className="!bg-primary -my-sm p-0">
				<div className="space-y-md flex flex-col">
					<div className="rounded-semi dark relative w-full [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
						<CopyButton className="top-md" code={children.toString()} />
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
