import { Resizable, ResizableHandle, ResizablePanel } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { CopyButton } from './copy-button'

function Preview({ children }: { children: React.ReactNode }) {
	return (
		<Resizable direction="horizontal">
			<ResizablePanel
				className="shadow-outline min-h-[350px] p-4"
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
		<div className={cx('flex flex-col gap-4', className)}>
			{Component ? <Preview>{Component}</Preview> : null}
			<div className="!bg-primary -my-2 p-0">
				<div className="flex flex-col space-y-4">
					<div className="dark relative w-full rounded-lg [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
						<CopyButton className="top-4" code={children.toString()} />
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
