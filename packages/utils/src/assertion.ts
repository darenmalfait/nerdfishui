import { type Dict } from './types'

// Array assertions
function isArray<T>(value: any): value is Array<T> {
	return Array.isArray(value)
}

// Object assertions
function isObject(value: any): value is Dict {
	const type = typeof value
	return (
		value != null &&
		(type === 'object' || type === 'function') &&
		!isArray(value)
	)
}

const isDev = process.env.NODE_ENV !== 'production'

export { isDev, isArray, isObject }
