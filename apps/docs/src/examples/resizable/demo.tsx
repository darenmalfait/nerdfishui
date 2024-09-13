import { Resizable } from '@nerdfish/ui'

export function ResizableDemo() {
	return (
		<Resizable.Root
			direction="horizontal"
			className="max-w-md rounded-lg md:min-w-[450px]"
		>
			<Resizable.Panel defaultSize={50}>
				<div className="border-muted/30 flex h-[200px] w-full items-center justify-center rounded-lg border p-6">
					<span className="font-semibold">One</span>
				</div>
			</Resizable.Panel>
			<Resizable.Handle />
			<Resizable.Panel defaultSize={50}>
				<Resizable.Root direction="vertical">
					<Resizable.Panel defaultSize={50}>
						<div className="border-muted/30 flex h-full w-full items-center justify-center rounded-lg border p-6">
							<span className="font-semibold">Two</span>
						</div>
					</Resizable.Panel>
					<Resizable.Handle />
					<Resizable.Panel defaultSize={50}>
						<div className="border-muted/30 flex h-full w-full items-center justify-center rounded-lg border p-6">
							<span className="font-semibold">Three</span>
						</div>
					</Resizable.Panel>
				</Resizable.Root>
			</Resizable.Panel>
		</Resizable.Root>
	)
}
