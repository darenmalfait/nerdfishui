import { Button } from '@nerdfish/react/button'
import { ArrowRightIcon } from 'lucide-react'
import { type Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { Logo } from '@/lib/components/icons/logo'

export default function Homepage() {
	return (
		<React.Fragment>
			{/* Set the Site name for Google results. https://developers.google.com/search/docs/appearance/site-names */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'Nerdfish UI',
						url: 'https://ui.nerdfish.be',
					}),
				}}
			/>
			<div className="container mx-auto flex max-w-2xl flex-1 items-center">
				<div>
					<Logo className="mb-friends h-8" aria-label="Nerdfish UI" />
					<h1 className="typography-heading mb-casual">
						Styled UI components for building accessible web apps and design
						systems.
					</h1>

					<div className="-mx-friends">
						<Button
							size="sm"
							variant="ghost"
							render={
								<Link
									className="text-accent inline-flex items-center"
									href="/docs"
								>
									Documentation <ArrowRightIcon className="size-4" />
								</Link>
							}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

const description =
	'Unstyled UI components for building accessible web apps and design systems.'

export const metadata: Metadata = {
	description,
	twitter: {
		description,
	},
	openGraph: {
		description,
	},
}
