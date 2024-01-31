import * as React from 'react'

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
  Component: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
  >,
  message: string,
): typeof Component {
  const Deprecated = React.forwardRef<T, P>((props, ref) => {
    warnOnce(message)
    return <Component ref={ref} {...(props as React.PropsWithoutRef<P>)} />
  })

  Deprecated.displayName = `deprecated(${Component.displayName})`

  return Deprecated
}

function deprecateProp<T>(prop: T | null, message?: string) {
  if (prop) {
    warnOnce(message ?? 'This prop is deprecated.')
  }
}

export {deprecateComponent, deprecateProp}
