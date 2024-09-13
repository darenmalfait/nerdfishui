'use client'

import { Mockup } from '@nerdfish/ui'

export function MockupDemo() {
	return (
		<Mockup.Root>
			<Mockup.Window>
				<pre data-prefix="1">
					<code>npm i @nerdfish/ui</code>
				</pre>
				<pre data-prefix=">" className="text-warning">
					<code>installing...</code>
				</pre>
				<pre data-prefix="3" className="bg-danger text-danger">
					<code>Error!</code>
				</pre>
				<pre>
					<code className="opacity-50">
						Something went wrong, aborting mission.
					</code>
				</pre>
			</Mockup.Window>
		</Mockup.Root>
	)
}
