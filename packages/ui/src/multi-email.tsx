// https://github.com/axisj/react-multi-email/ , but with some modifications
'use client'

import * as React from 'react'
import {cx, isEmail as isEmailFn, useControllableState} from '@nerdfish/utils'

import {Badge} from './badge'
import {Field} from './field'
import {getInputClassName, InputProps, RawInputProps} from './input'

interface RawMultiEmailProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'>,
    Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'> {
  id?: string
  emails?: string[]
  hasError?: boolean
  allowDisplayName?: boolean
  placeholder?: string
  onChangeInput?: (value: string) => void
  onChange?: (emails: string[]) => void
  onBlur?: () => void
  validateEmail?: (
    email: string,
    options?: {allowDisplayName?: boolean},
  ) => boolean | Promise<boolean>
  delimiter?: string
  disabled?: boolean
  spinner?: () => React.ReactNode
}

function MultiEmailPlaceholder({placeholder}: {placeholder?: string}) {
  if (!placeholder) return null

  return (
    <span
      data-placeholder
      className="absolute left-[0.5em] top-[0.4em] hidden p-[0.4em]"
    >
      {placeholder}
    </span>
  )
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
      allowDisplayName = true,
      hasError,
      icon: Icon,
      inputSize,
      onChangeInput,
      onChange,
      validateEmail,
      delimiter = `[${allowDisplayName ? '' : ' '},;]`,
      spinner,
      onKeyDown,
      disabled,
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
        const validEmails: string[] = []
        let currentInputValue = ''
        const re = new RegExp(delimiter, 'g')
        const isEmail = validateEmail ?? isEmailFn

        function addEmails(email: string) {
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
            const setArr = new Set(value.split(re).filter(n => n))

            const arr = [...setArr]
            const validations: (Promise<boolean> | boolean)[] = []

            while (arr.length) {
              const validateResult = isEmail(`${arr[0]?.trim()}`)

              if (typeof validateResult === 'boolean') {
                // eslint-disable-next-line max-depth
                if (validateResult) {
                  addEmails(`${arr.shift()?.trim()}`)
                } else if (allowDisplayName) {
                  const validateResultWithDisplayName = isEmail(
                    `${arr[0]?.trim()}`,
                    {allowDisplayName},
                  )
                  // eslint-disable-next-line max-depth
                  if (validateResultWithDisplayName) {
                    // Strip display name from email formatted as such "First Last <first.last@domain.com>"
                    const email = arr.shift()?.split('<')[1]?.split('>')[0]
                    addEmails(`${email}`)
                  } else if (arr.length === 1) {
                    currentInputValue = `${arr.shift()}`
                  } else {
                    arr.shift()
                  }
                } else {
                  currentInputValue = `${arr.shift()}`
                }
              } else {
                setSpinning(true)

                // rewrite this, so there is no await in a loop
                for (const email of arr) {
                  if (!validateEmail) return
                  validations.push(validateEmail(email))
                }
              }
            }

            const results = await Promise.all(validations)
            results.forEach(result => {
              if (!!result) {
                addEmails(`${arr.shift()}`)
                setSpinning(false)
              } else if (arr.length === 1) {
                currentInputValue = `${arr.shift()}`
              } else {
                arr.shift()
              }
            })
          } else if (isEnter) {
            const validateResult = isEmail(value)

            if (typeof validateResult === 'boolean') {
              if (validateResult) {
                addEmails(value)
              } else if (allowDisplayName) {
                const validateResultWithDisplayName = isEmail(value, {
                  allowDisplayName,
                })
                if (validateResultWithDisplayName) {
                  // Strip display name from email formatted as such "First Last <first.last@domain.com>"
                  const email = value.split('<')[1]?.split('>')[0]
                  addEmails(`${email}`)
                } else {
                  currentInputValue = value
                }
              } else {
                currentInputValue = value
              }
            } else {
              setSpinning(true)
              if ((await validateEmail?.(value)) === true) {
                addEmails(value)
                setSpinning(false)
              } else {
                currentInputValue = value
              }
            }
          } else {
            currentInputValue = value
          }
        }

        setEmails([...emails, ...validEmails])
        setInputValue(currentInputValue)

        if (validEmails.length) onChange?.([...emails, ...validEmails])
        if (inputValue !== currentInputValue) onChangeInput?.(currentInputValue)
      },
      [
        allowDisplayName,
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
        onChangeInput?.(value)
      },
      [findEmailAddress, onChangeInput],
    )

    const removeEmail = React.useCallback(
      (index: number) => {
        if (disabled) return

        const _emails = [...emails.slice(0, index), ...emails.slice(index + 1)]
        setEmails(_emails)
        onChange?.(_emails)
      },
      [disabled, emails, onChange, setEmails],
    )

    const editEmail = React.useCallback(
      (index: number) => {
        const toEdit = emails[index]
        if (disabled ?? !toEdit) return

        removeEmail(index)

        setInputValue(toEdit)
      },
      [disabled, emails, removeEmail, setInputValue],
    )

    const handleOnKeydown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e)

        switch (e.key) {
          case ' ':
          case 'Enter':
            e.preventDefault()
            break
          case 'Backspace':
            if (!e.currentTarget.value) {
              editEmail(emails.length - 1)
            }
            break
          default:
        }
      },
      [emails.length, onKeyDown, editEmail],
    )

    const handleOnKeyup = React.useCallback(
      async (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyUp?.(e)

        switch (e.key) {
          case ' ':
          case 'Enter':
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

    const handleOnBlur = React.useCallback(
      async (e: React.SyntheticEvent<HTMLInputElement>) => {
        await findEmailAddress(e.currentTarget.value, true)

        onBlur?.()
      },
      [findEmailAddress, onBlur],
    )

    React.useEffect(() => {
      setInputWidth(
        spanRef.current?.offsetWidth ? spanRef.current.offsetWidth + 10 : 10,
      )
    }, [inputValue])

    return (
      <button
        data-slot="control"
        type="button"
        role="textbox"
        disabled={disabled}
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
        <MultiEmailPlaceholder placeholder={placeholder} />
        <div
          style={{
            display: 'contents',
            flexWrap: 'inherit',
          }}
          className="-mt-1"
        >
          {emails.map((email: string, index: number) => (
            <Badge
              data-tag
              key={index}
              variant="default"
              className="mr-2 mt-1 inline-flex items-center"
            >
              <button
                type="button"
                onClick={() => editEmail(index)}
                data-tag-item
              >
                {email}
              </button>
              <button
                className="hover:bg-primary/10 active:bg-primary/15 ml-2 rounded-md px-2 py-1"
                data-tag-handle
                onClick={() => removeEmail(index)}
              >
                ×
              </button>
            </Badge>
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
          disabled={disabled}
          value={inputValue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
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
    <Field
      {...{
        description,
        descriptionId,
        error,
        errorId,
        htmlFor: inputId,
        label,
        className,
      }}
    >
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
    </Field>
  )
})

export {RawMultiEmail, MultiEmail}
