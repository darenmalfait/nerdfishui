'use client'

import { Button, ButtonGroup } from '@nerdfish/ui'
import { Mail } from 'lucide-react'

export function ButtonSizesExample() {
	return (
		<div className="gap-sm flex flex-col">
			<div className="space-x-sm flex items-center">
				<Button variant="brand" size="sm">
					Small
				</Button>
				<Button variant="brand" size="default">
					Default
				</Button>
				<Button variant="brand" size="lg">
					Large
				</Button>
				<Button variant="brand" size="xl">
					Extra Large
				</Button>
				<Button variant="brand" icon>
					<Mail />
					<span className="sr-only">Mail</span>
				</Button>
			</div>
			<div className="space-x-sm flex items-center">
				<ButtonGroup>
					<Button size="sm">Small</Button>
					<Button size="sm" icon>
						<Mail />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button>Default</Button>
					<Button icon>
						<Mail />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button size="lg">Large</Button>
					<Button size="lg" icon>
						<Mail />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button size="xl">Extra Large</Button>
					<Button size="xl" icon>
						<Mail />
					</Button>
				</ButtonGroup>
			</div>
			<div className="space-x-sm flex items-center">
				<Button variant="brand" size="sm" icon>
					<Mail />
				</Button>
				<Button variant="brand" size="default" icon>
					<Mail />
				</Button>
				<Button variant="brand" size="lg" icon>
					<Mail />
				</Button>
				<Button variant="brand" size="xl" icon>
					<Mail />
				</Button>
			</div>
		</div>
	)
}
