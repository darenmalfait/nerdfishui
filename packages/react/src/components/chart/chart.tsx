'use client'

import { cx } from '@nerdfish/utils'
import {
	type ComponentProps,
	createContext,
	useContext,
	type ComponentType,
	type ReactNode,
	useId,
	useMemo,
	type CSSProperties,
} from 'react'
import * as RechartsPrimitive from 'recharts'
import { type LegendPayload } from 'recharts/types/component/DefaultLegendContent'
import {
	type NameType,
	type Payload,
	type ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import { type Props as LegendProps } from 'recharts/types/component/Legend'
import { type TooltipContentProps } from 'recharts/types/component/Tooltip'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
	[k in string]: {
		label?: ReactNode
		icon?: ComponentType
	} & (
		| { color?: string; theme?: never }
		| { color?: never; theme: Record<keyof typeof THEMES, string> }
	)
}

type ChartContextProps = {
	config: ChartConfig
}

export type CustomTooltipProps = TooltipContentProps<ValueType, NameType> & {
	className?: string
	hideLabel?: boolean
	hideIndicator?: boolean
	indicator?: 'line' | 'dot' | 'dashed'
	nameKey?: string
	labelKey?: string
	labelFormatter?: (
		label: TooltipContentProps<number, string>['label'],
		payload: TooltipContentProps<number, string>['payload'],
	) => ReactNode
	formatter?: (
		value: number | string,
		name: string,
		item: Payload<number | string, string>,
		index: number,
		payload: ReadonlyArray<Payload<number | string, string>>,
	) => ReactNode
	labelClassName?: string
	color?: string
}

export type ChartLegendContentProps = {
	className?: string
	hideIcon?: boolean
	verticalAlign?: LegendProps['verticalAlign']
	payload?: LegendPayload[]
	nameKey?: string
}

const ChartContext = createContext<ChartContextProps | null>(null)

function useChart() {
	const context = useContext(ChartContext)

	if (!context) {
		throw new Error('useChart must be used within a <ChartContainer />')
	}

	return context
}

export type ChartStyleProps = {
	id: string
	config: ChartConfig
}
export function ChartStyle({ id, config }: ChartStyleProps) {
	const colorConfig = Object.entries(config).filter(
		([, c]) => c.theme ?? c.color,
	)

	if (!colorConfig.length) {
		return null
	}

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: Object.entries(THEMES)
					.map(
						([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
							.map(([key, itemConfig]) => {
								const color =
									itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
									itemConfig.color
								return color ? `  --color-${key}: ${color};` : null
							})
							.join('\n')}
            }
            `,
					)
					.join('\n'),
			}}
		/>
	)
}

export interface ChartContainerProps extends ComponentProps<'div'> {
	config: ChartConfig
	children: ComponentProps<
		typeof RechartsPrimitive.ResponsiveContainer
	>['children']
}
export function ChartContainer({
	id,
	className,
	children,
	config,
	...props
}: ChartContainerProps) {
	const uniqueId = useId()
	const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`

	return (
		<ChartContext.Provider value={{ config }}>
			<div
				data-slot="chart"
				data-chart={chartId}
				className={cx(
					"[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
					className,
				)}
				{...props}
			>
				<ChartStyle id={chartId} config={config} />
				<RechartsPrimitive.ResponsiveContainer>
					{children}
				</RechartsPrimitive.ResponsiveContainer>
			</div>
		</ChartContext.Provider>
	)
}

export const ChartTooltip = RechartsPrimitive.Tooltip

export function ChartTooltipContent({
	active,
	payload,
	label,
	className,
	indicator = 'dot',
	hideLabel = false,
	hideIndicator = false,
	labelFormatter,
	formatter,
	labelClassName,
	color,
	nameKey,
	labelKey,
}: CustomTooltipProps) {
	const { config } = useChart()

	const tooltipLabel = useMemo(() => {
		if (hideLabel || !payload.length) {
			return null
		}

		const [item] = payload
		const key = `${labelKey ?? item?.dataKey ?? item?.name ?? 'value'}`
		const itemConfig = getPayloadConfigFromPayload(config, item, key)
		const value = (() => {
			const v =
				!labelKey && typeof label === 'string'
					? (config[label]?.label ?? label)
					: itemConfig?.label

			return typeof v === 'string' || typeof v === 'number' ? v : undefined
		})()

		if (labelFormatter) {
			return (
				<div className={cx('font-medium', labelClassName)}>
					{labelFormatter(value, payload)}
				</div>
			)
		}

		if (!value) {
			return null
		}

		return <div className={cx('font-medium', labelClassName)}>{value}</div>
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey,
	])

	if (!active || !payload.length) {
		return null
	}

	const nestLabel = payload.length === 1 && indicator !== 'dot'

	return (
		<div
			className={cx(
				'border-border bg-background-secondary rounded-compact gap-best-friends p-best-friends grid min-w-[8rem] items-start border text-xs shadow-xl',
				className,
			)}
		>
			{!nestLabel ? tooltipLabel : null}
			<div className="gap-best-friends grid">
				{payload.map((item, index) => {
					const key = `${nameKey ?? item.name ?? item.dataKey ?? 'value'}`
					const itemConfig = getPayloadConfigFromPayload(config, item, key)
					const indicatorColor = color ?? item.payload.fill ?? item.color

					return (
						<div
							key={item.dataKey}
							className={cx(
								'[&>svg]:text-foreground-muted gap-best-friends flex w-full flex-wrap items-stretch [&>svg]:h-2.5 [&>svg]:w-2.5',
								indicator === 'dot' && 'items-center',
							)}
						>
							{formatter && item?.value !== undefined && item.name ? (
								formatter(item.value, item.name, item, index, item.payload)
							) : (
								<>
									{itemConfig?.icon ? (
										<itemConfig.icon />
									) : (
										!hideIndicator && (
											<div
												className={cx(
													'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
													{
														'h-2.5 w-2.5': indicator === 'dot',
														'w-1': indicator === 'line',
														'w-0 border-[1.5px] border-dashed bg-transparent':
															indicator === 'dashed',
														'my-0.5': nestLabel && indicator === 'dashed',
													},
												)}
												style={
													{
														'--color-bg': indicatorColor,
														'--color-border': indicatorColor,
													} as CSSProperties
												}
											/>
										)
									)}
									<div
										className={cx(
											'flex flex-1 justify-between leading-none',
											nestLabel ? 'items-end' : 'items-center',
										)}
									>
										<div className="gap-bff grid">
											{nestLabel ? tooltipLabel : null}
											<span className="text-foreground-muted">
												{itemConfig?.label ?? item.name}
											</span>
										</div>
										{item.value ? (
											<span className="text-foreground font-mono font-medium tabular-nums">
												{item.value.toLocaleString()}
											</span>
										) : null}
									</div>
								</>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export const ChartLegend = RechartsPrimitive.Legend

export function ChartLegendContent({
	className,
	hideIcon = false,
	payload,
	verticalAlign = 'bottom',
	nameKey,
}: ChartLegendContentProps) {
	const { config } = useChart()

	if (!payload?.length) {
		return null
	}

	return (
		<div
			className={cx(
				'gap-friends flex items-center justify-center',
				verticalAlign === 'top' ? 'pb-friends' : 'pt-friends',
				className,
			)}
		>
			{payload.map((item) => {
				const key = `${nameKey ?? item.dataKey ?? 'value'}`
				const itemConfig = getPayloadConfigFromPayload(config, item, key)

				return (
					<div
						key={item.value}
						className={cx(
							'[&>svg]:text-foreground-muted gap-best-friends flex items-center [&>svg]:h-3 [&>svg]:w-3',
						)}
					>
						{itemConfig?.icon && !hideIcon ? (
							<itemConfig.icon />
						) : (
							<div
								className="h-2 w-2 shrink-0 rounded-[2px]"
								style={{
									backgroundColor: item.color,
								}}
							/>
						)}
						{itemConfig?.label}
					</div>
				)
			})}
		</div>
	)
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
	config: ChartConfig,
	payload: unknown,
	key: string,
) {
	if (typeof payload !== 'object' || payload === null) {
		return undefined
	}

	const payloadPayload =
		'payload' in payload &&
		typeof payload.payload === 'object' &&
		payload.payload !== null
			? payload.payload
			: undefined

	let configLabelKey: string = key

	if (
		key in payload &&
		typeof payload[key as keyof typeof payload] === 'string'
	) {
		configLabelKey = payload[key as keyof typeof payload] as string
	} else if (
		payloadPayload &&
		key in payloadPayload &&
		typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
	) {
		configLabelKey = payloadPayload[
			key as keyof typeof payloadPayload
		] as string
	}

	return configLabelKey in config ? config[configLabelKey] : config[key]
}
