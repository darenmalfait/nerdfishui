import { Button, ButtonGroup, H2, H3, Paragraph } from '@nerdfish/ui'
import { type Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { Footer } from '../components/footer'
import { ExamplesNav } from './components/examples-nav'

export const metadata: Metadata = {
	title: 'Examples',
	description: 'Check out some examples app built using the components.',
}

interface ExamplesLayoutProps {
	children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
	return (
		<div className="container relative flex flex-col gap-10">
			<section>
				<H2 className="mb-2">Check out some examples</H2>
				<H3 className="mb-2 mt-0">Examples</H3>
				<Paragraph className="m-0">
					Dashboard, cards, authentication. Some examples built using the
					components. Use this as a guide to build your own.
				</Paragraph>
				<ButtonGroup className="mt-4">
					<Button asChild size="sm">
						<Link href="/docs">Get Started</Link>
					</Button>
				</ButtonGroup>
			</section>
			<section>
				<ExamplesNav />
				<div className="bg-background shadow-outline overflow-hidden rounded-[0.5rem] shadow">
					{children}
				</div>
			</section>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	)
}
