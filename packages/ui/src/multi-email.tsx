'use client'

import * as React from 'react'
import {cx, isEmail as isEmailFn, useControllableState} from '@nerdfish/utils'

import {
  getInputClassName,
  InputError,
  InputProps,
  Label,
  RawInputProps,
} from './input'

interface RawMultiEmailProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'>,
    Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'> {
  id?: string
  emails?: string[]
  hasError?: boolean
  placeholder?: string
  onChangeInput?: (value: string) => void
  onChange?: (emails: string[]) => void
  validateEmail?: (email: string) => boolean | Promise<boolean>
  delimiter?: string
  spinner?: () => React.ReactNode
}

const RawMultiEmail = React.forwardRef<HTMLInputElement, RawMultiEmailProps>(
  function RawMultiEmail(
    {
      value: valueProp,
      emails: emailsProp,
      className,
      placeholder = 'Add emails...',
      value: valueProps,
      defaultValue = '',
      hasError,
      icon: Icon,
      inputSize,
      onChangeInput,
      onChange,
      validateEmail,
      delimiter = '[ ,;]',
      spinner,
      onKeyDown,
      onBlur,
      onKeyUp,
      ...props
    },
    ref,
  ) {
    const [emails = [], setEmails] = useControllableState(emailsProp, [])
    const [inputValue, setInputValue] = useControllableState(
      valueProp,
      defaultValue,
    )
    const [spinning, setSpinning] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const spanRef = React.useRef<HTMLSpanElement>(null)
    const [inputWidth, setInputWidth] = React.useState(10)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const findEmailAddress = React.useCallback(
      async (value: string, isEnter?: boolean) => {
        async function validateEmails({
          addEmails,
          tempValue,
          arr,
          isEmail,
        }: {
          addEmails: (email: string) => boolean
          tempValue: string
          arr: string[]
          isEmail: (email: string) => boolean | Promise<boolean>
        }) {
          const validateResult = isEmail(`${arr[0]}`)

          if (typeof validateResult === 'boolean') {
            // eslint-disable-next-line max-depth
            if (validateResult) {
              addEmails(`${arr.shift()}`)
            } else if (arr.length === 1) {
              tempValue = `${arr.shift()}`
            } else {
              arr.shift()
            }
          } else {
            setSpinning(true)

            if ((await validateEmail?.(value)) === true) {
              addEmails(`${arr.shift()}`)
              setSpinning(false)
            } else if (arr.length === 1) {
              tempValue = `${arr.shift()}`
            } else {
              arr.shift()
            }
          }

          return tempValue
        }
        const validEmails: string[] = []
        let tempValue: string = ''
        const re = new RegExp(delimiter, 'g')
        const isEmail = validateEmail ?? isEmailFn

        const addEmails = (email: string) => {
          for (let i = 0, l = emails.length; i < l; i++) {
            if (emails[i] === email) {
              return false
            }
          }
          validEmails.push(email)
          return true
        }

        if (value !== '') {
          if (re.test(value)) {
            const splitData = value.split(re).filter(n => {
              return n !== ''
            })

            const setArr = new Set(splitData)
            const arr = [...setArr]

            const validations = []
            do {
              validations.push(
                validateEmails({
                  addEmails,
                  tempValue,
                  arr,
                  isEmail,
                }),
              )
            } while (arr.length)

            await Promise.all(validations)
          } else if (isEnter) {
            const validateResult = isEmail(value)
            if (typeof validateResult === 'boolean') {
              if (validateResult) {
                addEmails(value)
              } else {
                tempValue = value
              }
            } else {
              // handle promise
              setSpinning(true)
              if ((await validateEmail?.(value)) === true) {
                addEmails(value)
                setSpinning(false)
              } else {
                tempValue = value
              }
            }
          } else {
            tempValue = value
          }
        }

        setEmails([...emails, ...validEmails])
        setInputValue(tempValue)

        if (validEmails.length) {
          onChange?.([...emails, ...validEmails])
        }

        if (tempValue !== inputValue) {
          onChangeInput?.(tempValue)
        }
      },
      [
        delimiter,
        emails,
        inputValue,
        onChange,
        onChangeInput,
        setEmails,
        setInputValue,
        validateEmail,
      ],
    )

    const onChangeInputValue = React.useCallback(
      async (value: string) => {
        await findEmailAddress(value)
      },
      [findEmailAddress],
    )

    const removeEmail = React.useCallback(
      (index: number, isDisabled?: boolean) => {
        if (isDisabled) {
          return
        }

        const _emails = [...emails.slice(0, index), ...emails.slice(index + 1)]
        setEmails(_emails)
        onChange?.(_emails)
      },
      [emails, onChange, setEmails],
    )

    const handleOnKeydown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e)

        switch (e.key) {
          case 'Enter':
            e.preventDefault()
            break
          case ' ':
            e.preventDefault()
            break
          case 'Backspace':
            if (!e.currentTarget.value) {
              removeEmail(emails.length - 1, false)
            }
            break
          default:
        }
      },
      [emails.length, onKeyDown, removeEmail],
    )

    const handleOnKeyup = React.useCallback(
      async (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyUp?.(e)

        switch (e.key) {
          case 'Enter':
          case ' ':
          case 'Backspace':
            await findEmailAddress(e.currentTarget.value, true)
            break
          default:
        }
      },
      [findEmailAddress, onKeyUp],
    )

    const handleOnChange = React.useCallback(
      async (e: React.SyntheticEvent<HTMLInputElement>) =>
        onChangeInputValue(e.currentTarget.value),
      [onChangeInputValue],
    )

    React.useEffect(() => {
      setInputWidth(
        spanRef.current?.offsetWidth ? spanRef.current.offsetWidth + 10 : 10,
      )
    }, [inputValue])

    return (
      <button
        type="button"
        role="textbox"
        className={cx(
          getInputClassName(className, hasError, inputSize),
          'h-36 flex justify-start items-center content-start',
          !!Icon && 'pr-14',
        )}
        style={{
          flexFlow: 'wrap',
        }}
        onClick={() => {
          inputRef.current?.focus()
        }}
      >
        {spinning ? spinner?.() : null}
        {placeholder ? (
          <span
            data-placeholder
            className="absolute left-[0.5em] top-[0.4em] hidden p-[0.4em]"
          >
            {placeholder}
          </span>
        ) : null}
        <div
          style={{
            display: 'contents',
            flexWrap: 'inherit',
          }}
          className="-mt-1"
        >
          {emails.map((email: string, index: number) => (
            <div
              data-tag
              key={index}
              className="bg-inverse text-inverse mr-2 mt-1 inline-flex items-center space-x-2 rounded-md px-2 py-1"
            >
              <div data-tag-item>{email}</div>
              <button data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </button>
            </div>
          ))}
        </div>
        <span className="-z-1 invisible absolute" ref={spanRef}>
          {inputValue}
        </span>
        <input
          {...props}
          style={{width: inputWidth}}
          className="mt-1 w-auto border-none bg-transparent py-1 outline-none"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleOnKeydown}
          onKeyUp={handleOnKeyup}
        />
      </button>
    )
  },
)

RawMultiEmail.displayName = 'RawMultiEmail'

const MultiEmail = React.forwardRef<
  HTMLInputElement,
  InputProps & RawMultiEmailProps
>(function Input(
  {defaultValue, error, name, label, className, description, id, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className="w-full">
      {label ? (
        <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
          <Label htmlFor={inputId} className="mb-2">
            {label}
          </Label>
          {description ? (
            <span className="text-sm text-gray-200" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      ) : null}

      <RawMultiEmail
        hasError={!!error}
        {...(props as RawMultiEmailProps)}
        ref={ref}
        name={name}
        id={inputId}
        autoComplete={name}
        required
        defaultValue={defaultValue}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
      />

      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})

export {RawMultiEmail, MultiEmail}
