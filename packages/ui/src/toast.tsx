'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as ToastPrimitive from '@radix-ui/react-toast'

const variants = {
  default:
    'bg-white text-primary border-gray-200 dark:bg-gray-800 dark:border-gray-700',
  danger:
    'group danger bg-red-600 text-white border-red-600 dark:border-red-600',
  success:
    'group success bg-green-600 text-white border-green-600 dark:border-green-600',
  warning:
    'group warning bg-yellow-600 text-white border-yellow-600 dark:border-yellow-600',
  info: 'group info bg-blue-600 text-white border-blue-600 dark:border-blue-600',
}

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({className, ...props}, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cx(
      'fixed top-0 left-0 right-2 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:left-auto sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Toast>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Toast> & {
    variant?: keyof typeof variants
  }
>(({className, title, children, open, variant = 'default', ...props}, ref) => {
  return (
    <ToastPrimitive.Root
      {...props}
      className={cx(
        'not-prose data-[swipe=move]:transition-none grow-1 group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full mt-4 data-[state=closed]:slide-out-to-right-full dark:border-gray-700 last:mt-0 sm:last:mt-4',
        variants[variant],
        className,
      )}
      open={open}
      ref={ref}
    >
      <div className="grid gap-1">
        {title ? (
          <ToastPrimitive.Title className="text-sm font-semibold">
            {title}
          </ToastPrimitive.Title>
        ) : null}
        <ToastPrimitive.Description className="m-0 text-sm opacity-90">
          {children}
        </ToastPrimitive.Description>
      </div>

      <ToastPrimitive.Close
        className={cx(
          'absolute top-2 right-2 rounded-md p-1 text-gray-500 opacity-0 transition-opacity hover:text-gray-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 dark:hover:text-gray-50',
          'group-[.danger]:text-red-300 group-[.danger]:hover:text-red-50 group-[.danger]:focus:ring-red-400 group-[.danger]:focus:ring-offset-red-600',
          'group-[.success]:text-green-300 group-[.success]:hover:text-green-50 group-[.success]:focus:ring-green-400 group-[.success]:focus:ring-offset-green-600',
          'group-[.warning]:text-yellow-300 group-[.warning]:hover:text-yellow-50 group-[.warning]:focus:ring-yellow-400 group-[.warning]:focus:ring-offset-yellow-600',
          'group-[.info]:text-blue-300 group-[.info]:hover:text-blue-50 group-[.info]:focus:ring-blue-400 group-[.info]:focus:ring-offset-blue-600',
        )}
        aria-label="Close"
      >
        <span aria-hidden>×</span>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  )
})
Toast.displayName = ToastPrimitive.Toast.displayName

export {Toast, ToastProvider, ToastViewport}
