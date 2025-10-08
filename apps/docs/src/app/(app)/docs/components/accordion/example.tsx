'use client'

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@nerdfish/react/accordion'

export function AccordionExample() {
	return (
		<Accordion className="w-[450px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>Fish</AccordionTrigger>
				<AccordionContent>
					Ergonomic executive chair upholstered in bonded black leather and PVC
					padded seat and back for all-day comfort and support
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Ball</AccordionTrigger>
				<AccordionContent>
					The Nagasaki Lander is the trademarked name of several series of
					Nagasaki sport bikes, that started with the 1984 ABC800J
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>
					A Very Long Title About Salads And Their Various Ingredients
				</AccordionTrigger>
				<AccordionContent>
					The beautiful range of Apple Naturalé that has an exciting mix of
					natural ingredients. With the Goodness of 100% Natural Ingredients
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
