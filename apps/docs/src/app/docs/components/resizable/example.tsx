'use client'

import { Resizable, ResizablePanel, ResizableHandle } from '@nerdfish/ui'

export function ResizableExample() {
	return (
		<Resizable
			direction="horizontal"
			className="rounded-container max-w-md md:min-w-[450px]"
		>
			<ResizablePanel defaultSize={50}>
				<div className="border-muted/30 rounded-container p-md flex h-[200px] w-full items-center justify-center border">
					<span className="font-semibold">One</span>
				</div>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={50}>
				<Resizable direction="vertical">
					<ResizablePanel defaultSize={50}>
						<div className="border-muted/30 rounded-container p-md flex h-full w-full items-center justify-center border">
							<span className="font-semibold">Two</span>
						</div>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={50}>
						<div className="border-muted/30 rounded-container p-md flex h-full w-full items-center justify-center border">
							<span className="font-semibold">Three</span>
						</div>
					</ResizablePanel>
				</Resizable>
			</ResizablePanel>
		</Resizable>
	)
}
