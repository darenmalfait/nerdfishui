import { type Radius } from '../types'

export function Radius({ radius }: { radius: Radius }) {
	return (
		<div className="flex flex-col">
			<div className="text-foreground-muted typography-title mb-best-friends">
				{radius.name}
			</div>
			<div className="typography-body mb-friends flex-1">
				{radius.description}
			</div>

			<div className="gap-friends flex items-center justify-between">
				<div
					style={{
						borderRadius: radius.variable,
					}}
					className="bg-background-inverted h-25 w-1/2"
				/>
			</div>
		</div>
	)
}
