'use state'

import * as React from 'react'
import {Dispatch, SetStateAction, useState} from 'react'

export function useControllableState<T>(
  propValue: T | undefined,
  initialValue: T | (() => T),
  changeHandler?: Dispatch<SetStateAction<T | undefined>>,
): [T | undefined, (value: T) => void] {
  const [stateValue, setState] = useState<T>(initialValue)
  const value = propValue ?? stateValue

  return [
    value,
    (newValue: T) => {
      setState(newValue)
      changeHandler?.(newValue)
    },
  ]
}

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
