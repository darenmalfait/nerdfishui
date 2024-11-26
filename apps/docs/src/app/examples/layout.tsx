import { Button } from '@nerdfish/ui'
import { type Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { Footer } from '../components/footer'
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '../components/page-header'
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
		<div className="gap-lg pt-lg container relative flex flex-col">
			<PageHeader>
				<PageHeaderHeading>Examples</PageHeaderHeading>
				<PageHeaderDescription>
					Check out some examples app built using the components.
				</PageHeaderDescription>
				<PageActions>
					<Button asChild size="sm">
						<Link href="/docs">Get Started</Link>
					</Button>
				</PageActions>
			</PageHeader>

			<section>
				<ExamplesNav />
				<div className="bg-primary shadow-outline rounded-container overflow-hidden shadow">
					{children}
				</div>
			</section>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	)
}
