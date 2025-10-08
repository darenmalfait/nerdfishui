// i18n Configuration Interface
export interface FiltersI18nConfig {
	// UI Labels
	addFilter: string
	searchFields: string
	noFieldsFound: string
	noResultsFound: string
	select: string
	true: string
	false: string
	min: string
	max: string
	to: string
	typeAndPressEnter: string
	selected: string
	selectedCount: string
	percent: string
	defaultCurrency: string
	defaultColor: string
	addFilterTitle: string

	// Operators
	operators: {
		is: string
		isNot: string
		isAnyOf: string
		isNotAnyOf: string
		includesAll: string
		excludesAll: string
		before: string
		after: string
		between: string
		notBetween: string
		contains: string
		notContains: string
		startsWith: string
		endsWith: string
		isExactly: string
		equals: string
		notEquals: string
		greaterThan: string
		lessThan: string
		overlaps: string
		includes: string
		excludes: string
		includesAllOf: string
		includesAnyOf: string
		empty: string
		notEmpty: string
	}

	// Placeholders
	placeholders: {
		enterField: (fieldType: string) => string
		selectField: string
		searchField: (fieldName: string) => string
		enterKey: string
		enterValue: string
	}

	// Helper functions
	helpers: {
		formatOperator: (operator: string) => string
	}

	// Validation
	validation: {
		invalidEmail: string
		invalidUrl: string
		invalidTel: string
		invalid: string
	}
}

// Default English i18n configuration
export const DEFAULT_FILTERS_I18N: FiltersI18nConfig = {
	// UI Labels
	addFilter: 'Add filter',
	searchFields: 'Search fields...',
	noFieldsFound: 'No fields found.',
	noResultsFound: 'No results found.',
	select: 'Select...',
	true: 'True',
	false: 'False',
	min: 'Min',
	max: 'Max',
	to: 'to',
	typeAndPressEnter: 'Type and press Enter to add tag',
	selected: 'selected',
	selectedCount: 'selected',
	percent: '%',
	defaultCurrency: '$',
	defaultColor: '#000000',
	addFilterTitle: 'Add filter',

	// Operators
	operators: {
		is: 'is',
		isNot: 'is not',
		isAnyOf: 'is any of',
		isNotAnyOf: 'is not any of',
		includesAll: 'includes all',
		excludesAll: 'excludes all',
		before: 'before',
		after: 'after',
		between: 'between',
		notBetween: 'not between',
		contains: 'contains',
		notContains: 'does not contain',
		startsWith: 'starts with',
		endsWith: 'ends with',
		isExactly: 'is exactly',
		equals: 'equals',
		notEquals: 'not equals',
		greaterThan: 'greater than',
		lessThan: 'less than',
		overlaps: 'overlaps',
		includes: 'includes',
		excludes: 'excludes',
		includesAllOf: 'includes all of',
		includesAnyOf: 'includes any of',
		empty: 'is empty',
		notEmpty: 'is not empty',
	},

	// Placeholders
	placeholders: {
		enterField: (fieldType: string) => `Enter ${fieldType}...`,
		selectField: 'Select...',
		searchField: (fieldName: string) => `Search ${fieldName.toLowerCase()}...`,
		enterKey: 'Enter key...',
		enterValue: 'Enter value...',
	},

	// Helper functions
	helpers: {
		formatOperator: (operator: string) => operator.replace(/_/g, ' '),
	},

	// Validation
	validation: {
		invalidEmail: 'Invalid email format',
		invalidUrl: 'Invalid URL format',
		invalidTel: 'Invalid phone format',
		invalid: 'Invalid input format',
	},
}
