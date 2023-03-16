import {Dispatch, SetStateAction, useState} from 'react'

function useControllableState<T>(
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

export {useControllableState}
