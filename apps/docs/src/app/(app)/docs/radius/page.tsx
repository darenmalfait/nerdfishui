import { Radius } from './components/radius'
import { type Radius as RadiusType } from './types'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const radii: RadiusType[] = [
	{
		name: 'rounded-compact',
		variable: 'var(--radius-compact)',
		description:
			'Use for small elements, when the base border is getting almost full circle.',
	},
	{
		name: 'rounded-base',
		variable: 'var(--radius-base)',
		description: 'Use for most elements.',
	},
	{
		name: 'rounded-container',
		variable: 'var(--radius-container)',
		description:
			'Use for bigger elements, when the element contains other elements.',
	},
]

export default function RadiusPage() {
	return (
		<div>
			<DocsPageHeader
				title="Radius"
				description="Rounded corners and semantics"
			/>
			<div className="gap-casual mt-acquaintances flex max-w-xl flex-col">
				{radii.map((item) => (
					<Radius key={item.description} radius={item} />
				))}
			</div>
			<div className="gap-casual mt-acquaintances flex max-w-xl flex-col">
				<h2 className="typography-heading-sm mb-friends">Calculated radii</h2>
				<p className="typography-body mb-friends">
					When using radius within a container, it is visually better to
					calculate the radius based on the container radius and the padding of
					the container.
				</p>
				<div className="rounded-container bg-background-inverted w-full p-2">
					<div className="text-foreground bg-background w-full rounded-[calc(var(--radius-container)-theme(padding.2))] p-4">
						rounded-[calc(theme(borderRadius.container)-theme(padding.2))]
					</div>
				</div>
			</div>
		</div>
	)
}
