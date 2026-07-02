import { DurationShowcase } from './components/duration'
import { type DurationGroup } from './types'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const durationGroups: DurationGroup[] = [
	{
		title: 'Fast',
		description: 'Micro-interactions like hovers, toggles, and focus rings.',
		durations: [
			{
				name: 'duration-fast-min',
				variable: 'var(--duration-fast-min)',
				ms: '130ms',
				className: '**:data-[slot=progress-indicator]:duration-fast-min',
			},
			{
				name: 'duration-fast',
				variable: 'var(--duration-fast)',
				ms: '175ms',
				className: '**:data-[slot=progress-indicator]:duration-fast',
			},
			{
				name: 'duration-fast-max',
				variable: 'var(--duration-fast-max)',
				ms: '230ms',
				className: '**:data-[slot=progress-indicator]:duration-fast-max',
			},
		],
	},
	{
		title: 'Medium',
		description: 'Standard UI transitions like panels, menus, and reveals.',
		durations: [
			{
				name: 'duration-medium-min',
				variable: 'var(--duration-medium-min)',
				ms: '310ms',
				className: '**:data-[slot=progress-indicator]:duration-medium-min',
			},
			{
				name: 'duration-medium',
				variable: 'var(--duration-medium)',
				ms: '410ms',
				className: '**:data-[slot=progress-indicator]:duration-medium',
			},
			{
				name: 'duration-medium-max',
				variable: 'var(--duration-medium-max)',
				ms: '550ms',
				className: '**:data-[slot=progress-indicator]:duration-medium-max',
			},
		],
	},
	{
		title: 'Slow',
		description: 'Emphasis animations and larger layout changes.',
		durations: [
			{
				name: 'duration-slow-min',
				variable: 'var(--duration-slow-min)',
				ms: '730ms',
				className: '**:data-[slot=progress-indicator]:duration-slow-min',
			},
			{
				name: 'duration-slow',
				variable: 'var(--duration-slow)',
				ms: '975ms',
				className: '**:data-[slot=progress-indicator]:duration-slow',
			},
			{
				name: 'duration-slow-max',
				variable: 'var(--duration-slow-max)',
				ms: '1300ms',
				className: '**:data-[slot=progress-indicator]:duration-slow-max',
			},
		],
	},
]

export default function DurationPage() {
	return (
		<div>
			<DocsPageHeader
				title="Duration"
				description="Duration tokens keep motion consistent across components. Use them for transitions and animations instead of one-off timing values."
			/>
			<div className="mt-acquaintances max-w-xl">
				<DurationShowcase groups={durationGroups} />
			</div>
			<div className="gap-casual mt-acquaintances flex max-w-xl flex-col">
				<h2 className="typography-heading-sm mb-friends">Usage</h2>
				<p className="typography-body mb-friends">
					Apply duration tokens as Tailwind utilities or CSS variables.
				</p>
				<pre className="bg-background-muted rounded-compact px-friends py-friends overflow-x-auto font-mono text-sm">
					{`className="transition-all duration-fast"
style={{ transitionDuration: 'var(--duration-medium)' }}`}
				</pre>
			</div>
		</div>
	)
}
