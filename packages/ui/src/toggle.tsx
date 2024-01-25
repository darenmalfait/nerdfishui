'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

const toggleVariants = cva(
  'hover:bg-inverted/10 focus-outline data-[state=on]:bg-muted text-primary group relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none  disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'hover:bg-muted shadow-outline bg-transparent',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({className, variant, size, ...props}, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cx(toggleVariants({variant, size, className}))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
})

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({className, variant, size, children, ...props}, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cx('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{variant, size}}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({className, children, variant, size, ...props}, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cx(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
})

export {Toggle, toggleVariants, ToggleGroup}
