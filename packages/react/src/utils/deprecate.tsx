import { type ComponentType } from 'react'

const warnedMessages: {
	[message: string]: boolean
} = {}

const warnOnce = (message: string) => {
	if (!warnedMessages[message]) {
		console.warn(message)
		warnedMessages[message] = true
	}
}

function deprecateComponent<P extends object>(
	Component: ComponentType<P>,
	message: string,
) {
	function Deprecated(props: P) {
		warnOnce(message)
		return <Component {...props} />
	}

	Deprecated.displayName = `deprecated(${Component.displayName ?? Component.name})`

	return Deprecated
}

function deprecateProp<T>(prop: T | null, message?: string) {
	if (prop) {
		warnOnce(message ?? 'This prop is deprecated.')
	}
}

export { deprecateComponent, deprecateProp }
