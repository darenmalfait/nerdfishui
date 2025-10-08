'use client'

import { Separator } from '@nerdfish/react/separator'

export function SeparatorExample() {
	return (
		<div>
			<div className="space-y-bff">
				<h4 className="text-sm leading-none font-medium">Example</h4>
				<p className="text-foreground-muted text-sm">
					An example of a separator.
				</p>
			</div>
			<Separator className="my-friends" />
			<div className="space-x-friends flex h-5 items-center text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	)
}
