import * as React from 'react'

export function useControllableState<T>(
	propValue: T | undefined,
	initialValue: T | (() => T),
	changeHandler?: (value: T) => void,
): [T | undefined, (value: T) => void] {
	const [stateValue, setState] = React.useState<T>(initialValue)
	const value = propValue ?? stateValue

	return [
		value,
		(newValue: T) => {
			setState(newValue)
			changeHandler?.(newValue)
		},
	]
}
