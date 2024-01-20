'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const AlertDialogPortal = ({
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps & {
  className?: string
}) => (
  <AlertDialogPrimitive.Portal {...props}>
    <div
      className={cx(
        'fixed inset-0 z-50 flex items-end justify-center sm:items-center',
        className,
      )}
    >
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({className, children, ...props}, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cx(
      'animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity',
      className,
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({className, ...props}, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cx(
        'animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-primary p-6 opacity-100 sm:rounded-lg md:w-full',
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
))
DialogContent.displayName = AlertDialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cx('text-lg font-semibold text-primary', className)}
    {...props}
  />
))
DialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cx('text-sm text-muted', className)}
    {...props}
  />
))
DialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const DialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cx(
      'inline-flex h-10 items-center justify-center rounded-md bg-inverted py-2 px-4 text-sm font-semibold text-inverted transition-colors hover:bg-inverted/80 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900',
      className,
    )}
    {...props}
  />
))
DialogAction.displayName = AlertDialogPrimitive.Action.displayName

const DialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(
      'mt-2 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent py-2 px-4 text-sm font-semibold text-primary transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 sm:mt-0',
      className,
    )}
    {...props}
  />
))
DialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

const AlertDialog = Object.assign(AlertDialogPrimitive.Root, {
  Trigger: AlertDialogPrimitive.Trigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Action: DialogAction,
  Cancel: DialogCancel,
})

export {AlertDialog}
