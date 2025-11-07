'use client'

import { Checkbox } from '@nerdfish/react/checkbox'
import { Label } from '@nerdfish/react/label'

export function CheckboxExample() {
	return (
		<div className="gap-casual flex flex-col">
			<div className="flex items-center">
				<Checkbox id="terms" />
				<Label htmlFor="terms" className="pl-best-friends">
					Accept terms and conditions
				</Label>
			</div>
			<div className="flex items-start">
				<Checkbox id="terms-2" defaultChecked />
				<div className="grid gap-2">
					<Label htmlFor="terms-2" className="pl-best-friends">
						Accept terms and conditions
					</Label>
					<p className="text-foreground-muted pl-best-friends text-sm">
						By clicking this checkbox, you agree to the terms and conditions.
					</p>
				</div>
			</div>
			<div className="flex items-center">
				<Checkbox id="toggle" disabled />
				<Label htmlFor="toggle" className="pl-best-friends">
					Enable notifications
				</Label>
			</div>
			<Label className="hover:bg-background-muted/20 gap-best-friends p-friends rounded-base has-aria-checked:border-info has-aria-checked:bg-info-background flex items-start border">
				<Checkbox
					id="toggle-2"
					defaultChecked
					className="data-checked:bg-info-background-muted data-checked:border-info/20 data-checked:text-info"
				/>
				<div className="grid gap-1.5 font-normal">
					<p className="text-sm leading-none font-medium">
						Enable notifications
					</p>
					<p className="text-foreground-muted text-sm">
						You can enable or disable notifications at any time.
					</p>
				</div>
			</Label>
			<div className="flex items-center">
				<Checkbox id="invalid-state" aria-invalid />
				<Label htmlFor="invalid-state" className="pl-best-friends">
					Invalid state
				</Label>
			</div>
		</div>
	)
}
