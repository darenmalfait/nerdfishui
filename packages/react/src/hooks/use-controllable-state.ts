import * as React from 'react'

type UseControllableStateProps<T> = {
	prop: T | undefined
	defaultProp?: T
	onChange?: (value: T) => void
}

type SetStateFn<T> = (prev: T) => T

export function useControllableState<T>({
	prop,
	defaultProp,
	onChange,
}: UseControllableStateProps<T>) {
	const [uncontrolledProp, setUncontrolledProp] = React.useState(defaultProp)
	const isControlled = prop !== undefined
	const value = isControlled ? prop : uncontrolledProp

	const onChangeRef = React.useRef(onChange)
	onChangeRef.current = onChange

	const propRef = React.useRef(prop)
	propRef.current = prop

	const uncontrolledRef = React.useRef(uncontrolledProp)
	uncontrolledRef.current = uncontrolledProp

	const setValue = React.useCallback((next: T | SetStateFn<T>) => {
		const isControlledValue = propRef.current !== undefined
		const prev = isControlledValue
			? (propRef.current as T)
			: (uncontrolledRef.current as T)
		const resolved =
			typeof next === 'function' ? (next as SetStateFn<T>)(prev) : next

		if (!isControlledValue) {
			uncontrolledRef.current = resolved
			setUncontrolledProp(resolved)
		}

		if (!Object.is(resolved, prev)) {
			onChangeRef.current?.(resolved)
		}
	}, [])

	return [value as T, setValue] as const
}
