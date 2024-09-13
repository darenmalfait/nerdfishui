import { Button, ButtonGroup, H1, Paragraph } from '@nerdfish/ui'
import { type Metadata } from 'next'
import Link from 'next/link'
import { getMetaData } from '../lib/utils/seo'
import { generateOGImageUrl } from '~/lib/utils/social'

export async function generateMetadata(): Promise<Metadata | undefined> {
	const title = `NerdfishUI`

	return getMetaData({
		ogImage: generateOGImageUrl({
			heading: title,
		}),
		title,
		url: '/',
		description:
			'A custom component library built with React and TailwindCSS to help streamline proof of concept development and provide visually pleasing and functional components.',
	})
}

export default async function DocPage() {
	return (
		<main className="relative py-6 lg:gap-10 lg:py-6 xl:grid">
			<div className="mx-auto w-full min-w-0">
				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
							className="from-nerdfish to-nerdfish/50 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
					</div>
					<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						<div className="text-center">
							<H1 variant="primary">Components for your next project</H1>
							<Paragraph>
								An open source, opinionated component library built with React
								and TailwindCSS to help streamline proof of concept development
								and provide visually pleasing and functional components.
							</Paragraph>
							<ButtonGroup className="mt-8 justify-center">
								<Button accentuate asChild>
									<Link href="/docs">Get started</Link>
								</Button>
							</ButtonGroup>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					>
						<div
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
							className="from-nerdfish to-nerdfish/20 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
