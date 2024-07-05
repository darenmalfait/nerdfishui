'use client'

import { Accordion } from '@nerdfish/ui'

export function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-[450px]">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Fish</Accordion.Trigger>
				<Accordion.Content>
					Ergonomic executive chair upholstered in bonded black leather and PVC
					padded seat and back for all-day comfort and support
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Ball</Accordion.Trigger>
				<Accordion.Content>
					The Nagasaki Lander is the trademarked name of several series of
					Nagasaki sport bikes, that started with the 1984 ABC800J
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Salad</Accordion.Trigger>
				<Accordion.Content>
					The beautiful range of Apple Naturalé that has an exciting mix of
					natural ingredients. With the Goodness of 100% Natural Ingredients
				</Accordion.Content>
			</Accordion.Item>
		</Accordion>
	)
}
