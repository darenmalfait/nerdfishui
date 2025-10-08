'use client'

import { Checkbox } from '@nerdfish/react/checkbox'
import { Label } from '@nerdfish/react/label'

export function LabelExample() {
	return (
		<div>
			<div className="flex items-center">
				<Checkbox id="terms" />
				<Label htmlFor="terms" className="pl-best-friends">
					Accept terms and conditions
				</Label>
			</div>
		</div>
	)
}
