import { type ReactNode, type ChangeEvent } from 'react'

// Generic types for flexible filter system
export interface FilterOption<T = unknown> {
	value: T
	label: string
	icon?: ReactNode
	metadata?: Record<string, unknown>
}

export interface FilterOperator {
	value: string
	label: string
	supportsMultiple?: boolean
}

// Custom renderer props interface
export interface CustomRendererProps<T = unknown> {
	field: FilterFieldConfig<T>
	values: T[]
	onChange: (values: T[]) => void
	operator: string
}

// Grouped field configuration interface
export interface FilterFieldGroup<T = unknown> {
	group?: string
	fields: FilterFieldConfig<T>[]
}

// Union type for both flat and grouped field configurations
export type FilterFieldsConfig<T = unknown> =
	| FilterFieldConfig<T>[]
	| FilterFieldGroup<T>[]

export interface FilterFieldConfig<T = unknown> {
	key?: string
	label?: string
	icon?: ReactNode
	type?:
		| 'select'
		| 'multiselect'
		| 'date'
		| 'daterange'
		| 'text'
		| 'number'
		| 'numberrange'
		| 'boolean'
		| 'email'
		| 'url'
		| 'tel'
		| 'time'
		| 'datetime'
		| 'custom'
		| 'separator'
	// Group-level configuration
	group?: string
	fields?: FilterFieldConfig<T>[]
	// Field-specific options
	options?: FilterOption<T>[]
	operators?: FilterOperator[]
	customRenderer?: (props: CustomRendererProps<T>) => ReactNode
	customValueRenderer?: (values: T[], options: FilterOption<T>[]) => ReactNode
	placeholder?: string
	searchable?: boolean
	maxSelections?: number
	min?: number
	max?: number
	step?: number
	prefix?: string | ReactNode
	suffix?: string | ReactNode
	pattern?: string
	validation?: (value: unknown) => boolean
	allowCustomValues?: boolean
	className?: string
	popoverContentClassName?: string
	selectedOptionsClassName?: string
	// Grouping options (legacy support)
	groupLabel?: string
	// Boolean field options
	onLabel?: string
	offLabel?: string
	// Input event handlers
	onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
	// Default operator to use when creating a filter for this field
	defaultOperator?: string
	// Controlled values support for this field
	value?: T[]
	onValueChange?: (values: T[]) => void
}

export interface Filter<T = unknown> {
	id: string
	field: string
	operator: string
	values: T[]
}

export interface FilterGroup<T = unknown> {
	id: string
	label?: string
	filters: Filter<T>[]
	fields: FilterFieldConfig<T>[]
}
