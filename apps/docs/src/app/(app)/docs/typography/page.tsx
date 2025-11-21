import { Separator } from '@nerdfish/react/separator'
import { cn } from '@nerdfish/utils/class'
import { BlockquoteExample } from './examples/blockquote'
import { InsertDeleteExample } from './examples/insert-delete'
import { MarkExample } from './examples/mark'
import { OrderedListExample } from './examples/ordered-list'
import { TypographyExample } from './examples/typography'
import { UnorderedListExample } from './examples/unordered-list'
import { type TypographyVariant } from './types'
import { ComponentExample } from '@/lib/components/component-example'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const typography: TypographyVariant[] = [
	{
		className: 'typography-heading-xl',
	},
	{
		className: 'typography-heading-lg',
	},
	{
		className: 'typography-heading',
	},
	{
		className: 'typography-heading-sm',
	},
	{
		className: 'typography-headline',
	},
	{
		className: 'typography-title',
	},
	{
		className: 'typography-subtitle',
	},
	{
		className: 'typography-body',
	},
	{
		className: 'typography-body-large',
	},
	{
		className: 'typography-caption',
	},
	{
		className: 'typography-blockquote',
	},
]

export default function TypographyPage() {
	return (
		<div className="max-w-4xl">
			<DocsPageHeader
				title="Typography"
				description="Typography used in the NerdfishUI library"
			/>
			<div className="gap-acquaintances flex flex-col">
				<div>
					<h2 className="typography-heading-sm mb-friends">
						Semantic classnames
					</h2>
					<div className="space-y-casual flex flex-col">
						{typography.map((variant) => (
							<div key={variant.className}>
								<div className="gap-casual flex items-center">
									<code className="w-full">{variant.className}</code>
									<span className={cn(variant.className, 'w-full')}>Aa</span>
								</div>
								<Separator className="last:hidden" />
							</div>
						))}
					</div>
				</div>
				<div className="gap-casual flex flex-col">
					<h2 className="typography-heading-sm mb-friends">Lists</h2>
					<div>
						<h3 className="typography-subtitle mb-friends">Unordered list</h3>
						<ComponentExample
							component={UnorderedListExample}
							name="unordered-list"
						/>
					</div>
					<div>
						<h3 className="typography-subtitle mb-friends">Ordered list</h3>
						<ComponentExample
							component={OrderedListExample}
							name="ordered-list"
						/>
					</div>
				</div>
				<div className="gap-casual flex flex-col">
					<h2 className="typography-heading-sm mb-friends">Blockquotes</h2>
					<ComponentExample component={BlockquoteExample} name="blockquote" />
				</div>
				<div className="gap-casual flex flex-col">
					<h2 className="typography-heading-sm mb-friends">Insert & Delete</h2>
					<ComponentExample
						component={InsertDeleteExample}
						name="insert-delete"
					/>
				</div>
				<div className="gap-casual flex flex-col">
					<h2 className="typography-heading-sm mb-friends">Mark</h2>
					<ComponentExample component={MarkExample} name="mark" />
				</div>
				<div className="gap-casual flex flex-col">
					<h2 className="typography-heading-sm mb-friends">Typography</h2>
					<ComponentExample component={TypographyExample} name="typography" />
				</div>
			</div>
		</div>
	)
}
