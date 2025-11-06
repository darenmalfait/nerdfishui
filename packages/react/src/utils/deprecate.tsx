import {
	forwardRef,
	type ForwardRefExoticComponent,
	type PropsWithoutRef,
	type RefAttributes,
} from 'react'

const warnedMessages: {
	[message: string]: boolean
} = {}

const warnOnce = (message: string) => {
	if (!warnedMessages[message]) {
		console.warn(message)
		warnedMessages[message] = true
	}
}

function deprecateComponent<P, T>(
	Component: ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>,
	message: string,
): typeof Component {
	const Deprecated = forwardRef<T, P>((props, ref) => {
		warnOnce(message)
		return <Component ref={ref} {...props} />
	})

	Deprecated.displayName = `deprecated(${Component.displayName})`

	return Deprecated
}

function deprecateProp<T>(prop: T | null, message?: string) {
	if (prop) {
		warnOnce(message ?? 'This prop is deprecated.')
	}
}

export { deprecateComponent, deprecateProp }
