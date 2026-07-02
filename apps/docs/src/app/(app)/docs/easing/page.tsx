import { EasingShowcase } from './components/easing'
import { type Easing } from './types'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const easings: Easing[] = [
	{
		name: 'ease-standard',
		variable: 'var(--ease-standard)',
		value: 'cubic-bezier(0.24, 1, 0.4, 1)',
		className:
			'**:data-[slot=progress-indicator]:duration-slow **:data-[slot=progress-indicator]:ease-standard',
	},
]

export default function EasingPage() {
	return (
		<div>
			<DocsPageHeader
				title="Easing"
				description="Easing tokens keep motion feeling consistent across components. Use them for transitions and animations instead of one-off timing functions."
			/>
			<div className="mt-acquaintances max-w-xl">
				<EasingShowcase easings={easings} />
			</div>
			<div className="gap-casual mt-acquaintances flex max-w-xl flex-col">
				<h2 className="typography-heading-sm mb-friends">Usage</h2>
				<p className="typography-body mb-friends">
					Apply easing tokens as Tailwind utilities or CSS variables.
				</p>
				<pre className="bg-background-muted rounded-compact px-friends py-friends overflow-x-auto font-mono text-sm">
					{`className="transition-all duration-fast ease-standard"
style={{ transitionTimingFunction: 'var(--ease-standard)' }}`}
				</pre>
			</div>
		</div>
	)
}
