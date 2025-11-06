'use client'

import { Switch, SwitchThumb } from '@nerdfish/react/switch'
import { MoonIcon, SunIcon } from 'lucide-react'

export function SwitchIconExample() {
	return (
		<div className="flex items-center">
			<Switch
				size="lg"
				className="data-[checked]:bg-background-inverted data-[unchecked]:bg-background-secondary"
			>
				<SwitchThumb className="group/thumb">
					<SunIcon className="text-foreground-inverted size-3 group-data-[checked]/thumb:hidden" />
					<MoonIcon className="hidden size-3 group-data-[checked]/thumb:block" />
				</SwitchThumb>
			</Switch>
		</div>
	)
}
