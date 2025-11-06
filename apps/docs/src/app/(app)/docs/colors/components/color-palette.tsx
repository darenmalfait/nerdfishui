import { type ColorPalette } from '../types'
import { Color } from './color'

export function ColorPalette({ colorPalette }: { colorPalette: ColorPalette }) {
	return (
		<div id={colorPalette.name} className="rounded-base scroll-mt-20">
			<div className="flex items-center">
				<div className="flex-1 pl-1 text-sm font-medium">
					<h2 className="typography-heading-sm">{colorPalette.name}</h2>
				</div>
			</div>
			<div className="gap-friends py-friends sm:gap-best-friends flex flex-col sm:flex-row">
				{colorPalette.colors.map((color) => (
					<Color key={color.className} color={color} />
				))}
			</div>
		</div>
	)
}
