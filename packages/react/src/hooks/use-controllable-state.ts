import * as React from 'react'

type UseControllableStateProps<T> = {
	prop: T | undefined
	defaultProp?: T
	onChange?: (value: T) => void
}
export function useControllableState<T>({
	prop,
	defaultProp,
	onChange,
}: UseControllableStateProps<T>) {
	const [stateValue, setState] = React.useState<T | undefined>(defaultProp)
	const value = prop ?? stateValue

	return [
		value as T,
		(newValue: T) => {
			setState(newValue)
			onChange?.(newValue)
		},
	] as const
}
