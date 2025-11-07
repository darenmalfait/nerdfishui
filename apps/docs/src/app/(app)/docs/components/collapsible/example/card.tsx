'use client'

import { Badge } from '@nerdfish/react/badge'
import { Button } from '@nerdfish/react/button'
import { Card, CardContent, CardHeader } from '@nerdfish/react/card'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@nerdfish/react/collapsible'
import { cx } from '@nerdfish/utils'
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function CollapsibleCardExample() {
	const [isOpen, setIsOpen] = useState(false)

	interface IStatItem {
		label: string
		value: number
		change: string
		changeType: 'increase' | 'decrease' // Type to define whether it's an increase or decrease
	}

	const stats: IStatItem[] = [
		{
			label: 'Added to Cart',
			value: 3842,
			change: '+1.8%',
			changeType: 'increase',
		},
		{
			label: 'Reached Checkout',
			value: 1256,
			change: '-1.2%',
			changeType: 'decrease',
		},
		{ label: 'Purchased', value: 649, change: '+2.4%', changeType: 'increase' },
	]

	return (
		<Card className="w-full md:w-87.5">
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<CardHeader className="h-auto items-center gap-0">
					<div className="gap-friends flex items-center justify-between">
						<div>
							<div className="text-muted-foreground text-sm font-medium">
								Conversion Rate
							</div>
							<div className="flex items-center gap-1.5">
								<span className="text-foreground text-xl font-semibold">
									29.9%
								</span>
								<Badge appearance="outline" size="sm" shape="circle">
									+4,5%
								</Badge>
							</div>
						</div>
						<CollapsibleTrigger
							render={
								<Button variant="outline" size="sm">
									Details
									{isOpen ? <ChevronUp /> : <ChevronDown />}
								</Button>
							}
						/>
					</div>
				</CardHeader>
				<CollapsibleContent>
					<CardContent className="space-y-friends mt-friends text-sm">
						{stats.map((stat, index) => (
							<div key={index} className="flex items-center justify-between">
								<span className="text-muted-foreground">{stat.label}</span>
								<div className="flex items-center space-x-2">
									<span className="text-foreground font-semibold">
										${stat.value.toLocaleString()}
									</span>
									<span
										className={cx(
											'flex min-w-20 items-center justify-end text-sm font-medium',
											stat.changeType === 'increase'
												? 'text-success'
												: 'text-destructive',
										)}
									>
										{stat.changeType === 'increase' ? (
											<ArrowUp className="size-3.5" />
										) : (
											<ArrowDown className="size-3.5" />
										)}
										{stat.change}
									</span>
								</div>
							</div>
						))}
					</CardContent>
				</CollapsibleContent>
			</Collapsible>
		</Card>
	)
}
