import { type Spacing } from '../types'

export function Spacing({ spacing }: { spacing: Spacing }) {
	return (
		<div className="gap-friends flex items-center">
			<div
				style={{
					height: spacing.variable,
				}}
				className="bg-background-inverted rounded-base w-1/2"
			/>
			<div className="flex-1 text-sm">{spacing.description}</div>
			<div className="text-foreground-muted text-right text-sm">
				{spacing.name}
			</div>
		</div>
	)
}
