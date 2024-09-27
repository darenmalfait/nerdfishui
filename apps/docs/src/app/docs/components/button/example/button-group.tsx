'use client'

import { Button, ButtonGroup, H3 } from '@nerdfish/ui'

export function ButtonGroupExample() {
	return (
		<div className="gap2 flex flex-col">
			<H3>Horizontal</H3>
			<ButtonGroup>
				<Button>Button 1</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
			</ButtonGroup>
			<H3>Vertical</H3>
			<ButtonGroup orientation="vertical">
				<Button>Button 1</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
			</ButtonGroup>
		</div>
	)
}
