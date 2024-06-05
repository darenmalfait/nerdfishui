'use client'

import * as React from 'react'
import {DropdownMenu} from '@nerdfish/ui'
import {cx, type ExtractProps} from '@nerdfish/utils'

import {type NpmCommands} from '../lib/types/unist'
import {Icons} from './icons'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
}

async function copyToClipboardWithMeta(value: string) {
  await navigator.clipboard.writeText(value)
}

export function CopyButton({value, className, src, ...props}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <button
      className={cx(
        'relative z-20 inline-flex h-8 items-center justify-center rounded-md border-gray-200 p-2 text-sm font-medium text-gray-900 transition-all hover:bg-muted focus:outline-none',
        className,
      )}
      onClick={async () => {
        await copyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Icons.Check className="size-4" />
      ) : (
        <Icons.Copy className="size-4" />
      )}
    </button>
  )
}

//

interface CopyWithClassNamesProps
  extends ExtractProps<typeof DropdownMenu.Trigger> {
  value: string
  classNames: string
  className: string
}

export function CopyWithClassNames({
  value,
  classNames,
  className,
  ...props
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyToClipboard = React.useCallback(async (toCopy: string) => {
    await copyToClipboardWithMeta(toCopy)
    setHasCopied(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        className={cx(
          'relative z-20 inline-flex h-8 items-center justify-center rounded-md p-2 text-sm font-medium text-primary transition-all hover:bg-muted focus:outline-none hover:text-muted',
          className,
        )}
        {...props}
      >
        {hasCopied ? (
          <Icons.Check className="size-4" />
        ) : (
          <Icons.Copy className="size-4" />
        )}
        <span className="sr-only">Copy</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => copyToClipboard(value)}>
          <Icons.React className="mr-2 size-4" />
          <span>Component</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => copyToClipboard(classNames)}>
          <Icons.Tailwind className="mr-2 size-4" />
          <span>Classname</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

interface CopyNpmCommandButtonProps
  extends ExtractProps<typeof DropdownMenu.Trigger> {
  commands: Required<NpmCommands>
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps & {
  className?: string
}) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = React.useCallback(async (toCopy: string) => {
    await copyToClipboardWithMeta(toCopy)
    setHasCopied(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        className={cx(
          'relative z-20 inline-flex h-8 items-center justify-center rounded-md p-2 text-sm font-medium text-primary transition-all hover:bg-muted focus:outline-none',
          className,
        )}
        {...props}
      >
        {hasCopied ? (
          <Icons.Check className="size-4" />
        ) : (
          <Icons.Copy className="size-4" />
        )}
        <span className="sr-only">Copy</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => copyCommand(commands.__npmCommand__)}>
          <Icons.Npm className="mr-2 size-4 fill-[#CB3837]" />
          <span>npm</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => copyCommand(commands.__yarnCommand__)}
        >
          <Icons.Yarn className="mr-2 size-4 fill-[#2C8EBB]" />
          <span>yarn</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => copyCommand(commands.__pnpmCommand__)}
        >
          <Icons.Pnpm className="mr-2 size-4 fill-[#F69220]" />
          <span>pnpm</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
