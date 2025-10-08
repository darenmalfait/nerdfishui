import { Spacing } from './components/spacing'
import { type Spacing as SpacingType } from './types'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const spacing: SpacingType[] = [
	{
		name: 'spacing-bff',
		variable: 'var(--spacing-bff)',
		description: '0.25x',
	},
	{
		name: 'spacing-best-friends',
		variable: 'var(--spacing-best-friends)',
		description: '0.5x',
	},
	{
		name: 'spacing-friends',
		variable: 'var(--spacing-friends)',
		description: '1x',
	},
	{
		name: 'spacing-casual',
		variable: 'var(--spacing-casual)',
		description: '1.5x',
	},
	{
		name: '',
		variable: 'var(--spacing-proximity-2)',
		description: '2x',
	},
	{
		name: '',
		variable: 'var(--spacing-proximity-3)',
		description: '3x',
	},
	{
		name: 'spacing-acquaintances',
		variable: 'var(--spacing-acquaintances)',
		description: '4x',
	},
	{
		name: 'spacing-distant',
		variable: 'var(--spacing-distant)',
		description: '5x',
	},
	{
		name: 'spacing-strangers',
		variable: 'var(--spacing-strangers)',
		description: '7.5x',
	},
]

export default function ColorsPage() {
	return (
		<div>
			<DocsPageHeader
				title="Spacing"
				description="If you are in the design business, whether graphic or digital painting,… you must have heard about the principle of proximity."
			/>
			<div className="gap-casual mt-acquaintances flex max-w-xl flex-col">
				{spacing.map((item) => (
					<Spacing key={item.description} spacing={item} />
				))}
			</div>
		</div>
	)
}
