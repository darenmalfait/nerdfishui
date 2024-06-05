'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {type DialogProps} from '@radix-ui/react-dialog'
import {Command as CommandPrimitive} from 'cmdk'
import {Search} from 'lucide-react'

import {Dialog} from './dialog'

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({className, ...props}, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cx(
      'flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover',
      className,
    )}
    {...props}
  />
))
CommandRoot.displayName = CommandPrimitive.displayName

type CommandDialogProps = DialogProps

const CommandDialog = ({children, ...props}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <Dialog.Content className="overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100">
        <CommandRoot className="[&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({className, ...props}, ref) => (
  <div
    className="flex items-center border-b border-b-gray-100 px-4 dark:border-b-gray-700"
    // eslint-disable-next-line react/no-unknown-property
    cmdk-input-wrapper=""
  >
    <Search className="text-primary mr-2 size-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cx(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-primary text-sm outline-none placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({className, ...props}, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cx('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="text-muted py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cx(
      'overflow-hidden py-3 px-2 text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-gray-900 [&_[cmdk-group-heading]]:dark:text-gray-300',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cx('-mx-1 h-px bg-muted', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cx(
      'relative flex cursor-pointer select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none aria-selected:bg-muted data-[disabled]:pointer-events-none data-[disabled]:text-muted text-primary',
      className,
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cx(
        'ml-auto text-xs tracking-widest text-primary/50',
        className,
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

const Command = Object.assign(CommandRoot, {
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
})

export {Command}
