import { ColorPalette } from './components/color-palette'
import { type ColorPalette as ColorPaletteType } from './types'
import { DocsPageHeader } from '@/lib/components/docs-page-header'

const colors: ColorPaletteType[] = [
	{
		name: 'Accent',
		colors: [
			{
				name: 'accent',
				className: 'text-accent',
				variable: 'var(--color-accent)',
				foreground: 'var(--color-accent-contrast)',
			},
			{
				name: 'accent-contrast',
				className: 'text-accent-contrast',
				variable: 'var(--color-accent-contrast)',
				foreground: 'var(--color-accent)',
			},
		],
	},
	{
		name: 'Foreground',
		colors: [
			{
				name: 'foreground',
				className: 'text-foreground',
				variable: 'var(--color-foreground)',
				foreground: 'var(--color-foreground-inverted)',
			},

			{
				name: 'foreground-muted',
				className: 'text-foreground-muted',
				variable: 'var(--color-foreground-muted)',
				foreground: 'var(--color-foreground-inverted)',
			},
			{
				name: 'foreground-inverted',
				className: 'text-foreground-inverted',
				variable: 'var(--color-foreground-inverted)',
				foreground: 'var(--color-foreground)',
			},
		],
	},
	{
		name: 'Background',
		colors: [
			{
				name: 'background',
				className: 'bg-background',
				variable: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'background-secondary',
				className: 'bg-background-secondary',
				variable: 'var(--color-background-secondary)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'background-muted',
				className: 'bg-background-muted',
				variable: 'var(--color-background-muted)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'background-inverted',
				className: 'bg-background-inverted',
				variable: 'var(--color-background-inverted)',
				foreground: 'var(--color-foreground-inverted)',
			},
		],
	},
	{
		name: 'Popover',
		colors: [
			{
				name: 'popover',
				className: 'bg-popover',
				variable: 'var(--color-popover)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'popover-contrast',
				className: 'bg-popover-contrast',
				variable: 'var(--color-popover-contrast)',
				foreground: 'var(--color-foreground-inverted)',
			},
		],
	},
	{
		name: 'Destructive',
		colors: [
			{
				name: 'destructive',
				className: 'bg-destructive',
				variable: 'var(--color-destructive)',
				foreground: 'var(--color-destructive-contrast)',
			},
			{
				name: 'destructive-contrast',
				className: 'bg-destructive-contrast',
				variable: 'var(--color-destructive-contrast)',
				foreground: 'var(--color-destructive)',
			},
			{
				name: 'destructive-background',
				className: 'bg-destructive-background',
				variable: 'var(--color-destructive-background)',
				foreground: 'var(--color-destructive)',
			},
			{
				name: 'destructive-background-muted',
				className: 'bg-destructive-background-muted',
				variable: 'var(--color-destructive-background-muted)',
				foreground: 'var(--color-destructive)',
			},
		],
	},
	{
		name: 'Success',
		colors: [
			{
				name: 'success',
				className: 'bg-success',
				variable: 'var(--color-success)',
				foreground: 'var(--color-success-contrast)',
			},
			{
				name: 'success-contrast',
				className: 'bg-success-contrast',
				variable: 'var(--color-success-contrast)',
				foreground: 'var(--color-success)',
			},
			{
				name: 'success-background',
				className: 'bg-success-background',
				variable: 'var(--color-success-background)',
				foreground: 'var(--color-success)',
			},
			{
				name: 'success-background-muted',
				className: 'bg-success-background-muted',
				variable: 'var(--color-success-background-muted)',
				foreground: 'var(--color-success)',
			},
		],
	},
	{
		name: 'Info',
		colors: [
			{
				name: 'info',
				className: 'bg-info',
				variable: 'var(--color-info)',
				foreground: 'var(--color-info-contrast)',
			},
			{
				name: 'info-contrast',
				className: 'bg-info-contrast',
				variable: 'var(--color-info-contrast)',
				foreground: 'var(--color-info)',
			},
			{
				name: 'info-background',
				className: 'bg-info-background',
				variable: 'var(--color-info-background)',
				foreground: 'var(--color-info)',
			},
			{
				name: 'info-background-muted',
				className: 'bg-info-background-muted',
				variable: 'var(--color-info-background-muted)',
				foreground: 'var(--color-info)',
			},
		],
	},
	{
		name: 'Warning',
		colors: [
			{
				name: 'warning',
				className: 'bg-warning',
				variable: 'var(--color-warning)',
				foreground: 'var(--color-warning-contrast)',
			},
			{
				name: 'warning-contrast',
				className: 'bg-warning-contrast',
				variable: 'var(--color-warning-contrast)',
				foreground: 'var(--color-warning)',
			},
			{
				name: 'warning-background',
				className: 'bg-warning-background',
				variable: 'var(--color-warning-background)',
				foreground: 'var(--color-warning)',
			},
			{
				name: 'warning-background-muted',
				className: 'bg-warning-background-muted',
				variable: 'var(--color-warning-background-muted)',
				foreground: 'var(--color-warning)',
			},
		],
	},
	{
		name: 'Border',
		colors: [
			{
				name: 'border',
				className: 'border-border',
				variable: 'var(--color-border)',
				foreground: 'var(--color-foreground)',
			},
		],
	},
	{
		name: 'Ring',
		colors: [
			{
				name: 'ring',
				className: 'ring-ring',
				variable: 'var(--color-ring)',
				foreground: 'var(--color-foreground)',
			},
		],
	},
	{
		name: 'Sidebar',
		colors: [
			{
				name: 'sidebar',
				className: 'bg-sidebar',
				variable: 'var(--color-sidebar)',
				foreground: 'var(--color-sidebar-foreground)',
			},
			{
				name: 'sidebar-foreground',
				className: 'bg-sidebar-foreground',
				variable: 'var(--color-sidebar-foreground)',
				foreground: 'var(--color-sidebar)',
			},
			{
				name: 'sidebar-secondary',
				className: 'bg-sidebar-secondary',
				variable: 'var(--color-sidebar-secondary)',
				foreground: 'var(--color-sidebar-secondary-contrast)',
			},
			{
				name: 'sidebar-secondary-contrast',
				className: 'bg-sidebar-secondary-contrast',
				variable: 'var(--color-sidebar-secondary-contrast)',
				foreground: 'var(--color-sidebar-secondary)',
			},
			{
				name: 'sidebar-muted',
				className: 'bg-sidebar-muted',
				variable: 'var(--color-sidebar-muted)',
				foreground: 'var(--color-sidebar-muted-contrast)',
			},
			{
				name: 'sidebar-muted-contrast',
				className: 'bg-sidebar-muted-contrast',
				variable: 'var(--color-sidebar-muted-contrast)',
				foreground: 'var(--color-sidebar-muted)',
			},
			{
				name: 'sidebar-border',
				className: 'bg-sidebar-border',
				variable: 'var(--color-sidebar-border)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'sidebar-ring',
				className: 'bg-sidebar-ring',
				variable: 'var(--color-sidebar-ring)',
				foreground: 'var(--color-foreground)',
			},
		],
	},
	{
		name: 'Chart',
		colors: [
			{
				name: 'chart-1',
				className: 'bg-chart-1',
				variable: 'var(--color-chart-1)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'chart-2',
				className: 'bg-chart-2',
				variable: 'var(--color-chart-2)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'chart-3',
				className: 'bg-chart-3',
				variable: 'var(--color-chart-3)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'chart-4',
				className: 'bg-chart-4',
				variable: 'var(--color-chart-4)',
				foreground: 'var(--color-foreground)',
			},
			{
				name: 'chart-5',
				className: 'bg-chart-5',
				variable: 'var(--color-chart-5)',
				foreground: 'var(--color-foreground)',
			},
		],
	},
]

export default function ColorsPage() {
	return (
		<div>
			<DocsPageHeader
				title="Colors"
				description="Colors used in the NerdfishUI library"
			/>
			<div className="grid gap-8 lg:gap-16 xl:gap-20">
				{colors.map((colorPalette) => (
					<ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
				))}
			</div>
		</div>
	)
}
