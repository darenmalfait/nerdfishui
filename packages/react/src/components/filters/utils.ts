/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DEFAULT_FILTERS_I18N, type FiltersI18nConfig } from './config'
import { type FilterGroup } from './filters'
import {
	type FilterFieldGroup,
	type FilterFieldsConfig,
	type FilterOperator,
	type Filter,
	type FilterFieldConfig,
} from './types'

export function createFilter<T = unknown>(
	field: string,
	operator?: string,
	values: T[] = [],
): Filter<T> {
	return {
		id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
		field,
		operator: operator ?? 'is',
		values,
	}
}

export function createFilterGroup<T = unknown>(
	id: string,
	label: string,
	fields: FilterFieldConfig<T>[],
	initialFilters: Filter<T>[] = [],
): FilterGroup<T> {
	return {
		id,
		label,
		filters: initialFilters,
		fields,
	}
}

// Helper functions to handle both flat and grouped field configurations
export function isFieldGroup<T = unknown>(
	item: FilterFieldConfig<T> | FilterFieldGroup<T>,
): item is FilterFieldGroup<T> {
	return 'fields' in item && Array.isArray(item.fields)
}

// Helper function to check if a FilterFieldConfig is a group-level configuration
export function isGroupLevelField<T = unknown>(
	field: FilterFieldConfig<T>,
): boolean {
	return Boolean(field.group && field.fields)
}

export function flattenFields<T = unknown>(
	fields: FilterFieldsConfig<T>,
): FilterFieldConfig<T>[] {
	return fields.reduce<FilterFieldConfig<T>[]>((acc, item) => {
		if (isFieldGroup(item)) {
			return [...acc, ...item.fields]
		}
		// Handle group-level fields (new structure)
		if (isGroupLevelField(item)) {
			return [...acc, ...item.fields!]
		}
		return [...acc, item]
	}, [])
}

export function getFieldsMap<T = unknown>(
	fields: FilterFieldsConfig<T>,
): Record<string, FilterFieldConfig<T>> {
	const flatFields = flattenFields(fields)
	return flatFields.reduce<Record<string, FilterFieldConfig<T>>>(
		(acc, field) => {
			// Only add fields that have a key (skip group-level configurations)
			if (field.key) {
				acc[field.key] = field
			}
			return acc
		},
		{},
	)
}

// Helper function to create operators from i18n config
export function createOperatorsFromI18n(
	i18n: FiltersI18nConfig,
): Record<string, FilterOperator[]> {
	return {
		select: [
			{ value: 'is', label: i18n.operators.is },
			{ value: 'is_not', label: i18n.operators.isNot },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		multiselect: [
			{ value: 'is_any_of', label: i18n.operators.isAnyOf },
			{ value: 'is_not_any_of', label: i18n.operators.isNotAnyOf },
			{ value: 'includes_all', label: i18n.operators.includesAll },
			{ value: 'excludes_all', label: i18n.operators.excludesAll },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		date: [
			{ value: 'before', label: i18n.operators.before },
			{ value: 'after', label: i18n.operators.after },
			{ value: 'is', label: i18n.operators.is },
			{ value: 'is_not', label: i18n.operators.isNot },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		daterange: [
			{ value: 'between', label: i18n.operators.between },
			{ value: 'not_between', label: i18n.operators.notBetween },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		text: [
			{ value: 'contains', label: i18n.operators.contains },
			{ value: 'not_contains', label: i18n.operators.notContains },
			{ value: 'starts_with', label: i18n.operators.startsWith },
			{ value: 'ends_with', label: i18n.operators.endsWith },
			{ value: 'is', label: i18n.operators.isExactly },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		number: [
			{ value: 'equals', label: i18n.operators.equals },
			{ value: 'not_equals', label: i18n.operators.notEquals },
			{ value: 'greater_than', label: i18n.operators.greaterThan },
			{ value: 'less_than', label: i18n.operators.lessThan },
			{ value: 'between', label: i18n.operators.between },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		numberrange: [
			{ value: 'between', label: i18n.operators.between },
			{ value: 'overlaps', label: i18n.operators.overlaps },
			{ value: 'contains', label: i18n.operators.contains },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		boolean: [
			{ value: 'is', label: i18n.operators.is },
			{ value: 'is_not', label: i18n.operators.isNot },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		email: [
			{ value: 'contains', label: i18n.operators.contains },
			{ value: 'not_contains', label: i18n.operators.notContains },
			{ value: 'starts_with', label: i18n.operators.startsWith },
			{ value: 'ends_with', label: i18n.operators.endsWith },
			{ value: 'is', label: i18n.operators.isExactly },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		url: [
			{ value: 'contains', label: i18n.operators.contains },
			{ value: 'not_contains', label: i18n.operators.notContains },
			{ value: 'starts_with', label: i18n.operators.startsWith },
			{ value: 'ends_with', label: i18n.operators.endsWith },
			{ value: 'is', label: i18n.operators.isExactly },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		tel: [
			{ value: 'contains', label: i18n.operators.contains },
			{ value: 'not_contains', label: i18n.operators.notContains },
			{ value: 'starts_with', label: i18n.operators.startsWith },
			{ value: 'ends_with', label: i18n.operators.endsWith },
			{ value: 'is', label: i18n.operators.isExactly },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		time: [
			{ value: 'before', label: i18n.operators.before },
			{ value: 'after', label: i18n.operators.after },
			{ value: 'is', label: i18n.operators.is },
			{ value: 'between', label: i18n.operators.between },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
		datetime: [
			{ value: 'before', label: i18n.operators.before },
			{ value: 'after', label: i18n.operators.after },
			{ value: 'is', label: i18n.operators.is },
			{ value: 'between', label: i18n.operators.between },
			{ value: 'empty', label: i18n.operators.empty },
			{ value: 'not_empty', label: i18n.operators.notEmpty },
		],
	}
}

// Default operators for different field types (using default i18n)
export const DEFAULT_OPERATORS: Record<string, FilterOperator[]> =
	createOperatorsFromI18n(DEFAULT_FILTERS_I18N)

// Helper function to get operators for a field
export function getOperatorsForField<T = unknown>(
	field: FilterFieldConfig<T>,
	values: T[],
	i18n: FiltersI18nConfig,
): FilterOperator[] {
	if (field.operators) return field.operators

	const operators = createOperatorsFromI18n(i18n)

	// Determine field type for operator selection
	let fieldType = field.type ?? 'select'

	// If it's a select field but has multiple values, treat as multiselect
	if (fieldType === 'select' && values.length > 1) {
		fieldType = 'multiselect'
	}

	// If it's a multiselect field or has multiselect operators, use multiselect operators
	if (fieldType === 'multiselect' || field.type === 'multiselect') {
		return operators.multiselect ?? []
	}

	return operators[fieldType] ?? operators.select ?? []
}
