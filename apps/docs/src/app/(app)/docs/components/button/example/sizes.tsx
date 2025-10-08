'use client'

import { Button } from '@nerdfish/react/button'
import { ButtonGroup } from '@nerdfish/react/button-group'
import { Mail } from 'lucide-react'

export function ButtonSizesExample() {
	return (
		<div className="gap-casual flex flex-col">
			<div className="gap-best-friends flex flex-col">
				<div>
					<Button variant="accent" size="xs">
						Extra Small
					</Button>
				</div>
				<div>
					<Button variant="accent" size="sm">
						Small
					</Button>
				</div>
				<div>
					<Button variant="accent" size="md">
						Medium
					</Button>
				</div>
				<div>
					<Button variant="accent" size="lg">
						Large
					</Button>
				</div>
				<div>
					<Button variant="accent" size="xl">
						Extra Large
					</Button>
				</div>
			</div>
			<div className="gap-best-friends flex flex-col">
				<ButtonGroup>
					<Button size="xs">Extra small</Button>
					<Button size="xs" icon>
						<Mail />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button size="sm">Small</Button>
					<Button size="sm" icon>
						<Mail />
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button>Medium</Button>
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
			<div className="gap-best-friends flex flex-col">
				<Button variant="accent" size="xs" icon>
					<Mail />
				</Button>
				<Button variant="accent" size="sm" icon>
					<Mail />
				</Button>
				<Button variant="accent" size="md" icon>
					<Mail />
				</Button>
				<Button variant="accent" size="lg" icon>
					<Mail />
				</Button>
				<Button variant="accent" size="xl" icon>
					<Mail />
				</Button>
			</div>
		</div>
	)
}
