'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import * as ResizablePrimitive from 'react-resizable-panels'

export const Resizable = ({
	className,
	...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
	<ResizablePrimitive.PanelGroup
		className={cx(
			'gap-md flex h-full w-full !overflow-visible data-[panel-group-direction=vertical]:flex-col',
			className,
		)}
		{...props}
	/>
)

export const ResizablePanel = React.forwardRef<
	ResizablePrimitive.ImperativePanelHandle,
	React.ComponentProps<typeof ResizablePrimitive.Panel>
>(
	(
		{
			className,
			...props
		}: React.ComponentProps<typeof ResizablePrimitive.Panel>,
		ref,
	) => (
		<ResizablePrimitive.Panel
			className={cx('flex items-center justify-center', className)}
			{...props}
			ref={ref}
		/>
	),
)
ResizablePanel.displayName = 'ResizablePanel'

export const ResizableHandle = ({
	className,
	...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>) => (
	<ResizablePrimitive.PanelResizeHandle
		className={cx(
			'bg-inverted/15 focus-visible:ring-ring rounded-container relative my-3 flex min-w-1.5 items-center justify-center opacity-75 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1',
			// horizontal
			'data-[panel-group-direction=vertical]:min-h-1.5 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',

			className,
		)}
		{...props}
	/>
)

export type ResizableProps = React.ComponentProps<typeof Resizable>
export type ResizablePanelProps = React.ComponentProps<typeof ResizablePanel>
export type ResizableHandleProps = React.ComponentProps<typeof ResizableHandle>
