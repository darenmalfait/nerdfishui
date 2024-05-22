'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as TabsPrimivite from '@radix-ui/react-tabs'

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.List>
>(({className, ...props}, ref) => (
  <TabsPrimivite.List
    ref={ref}
    className={cx(
      'inline-flex items-center justify-center rounded-md gap-1 focus-within:outline-none',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimivite.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.Trigger>
>(({className, ...props}, ref) => (
  <TabsPrimivite.Trigger
    className={cx(
      'inline-flex focus-within:outline-none relative items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-primary transition-all  disabled:pointer-events-none disabled:opacity-50 dark:data-[state=active]:bg-white/10 data-[state=active]:bg-black/10 focus-outline dark:hover:bg-white/5 bg-black/5',
      className,
    )}
    {...props}
    ref={ref}
  />
))
TabsTrigger.displayName = TabsPrimivite.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.Content>
>(({className, ...props}, ref) => (
  <TabsPrimivite.Content
    className={cx(
      'mt-3 rounded-md dark:bg-white/10 bg-black/10 p-6 focus-within:outline-none',
      className,
    )}
    {...props}
    ref={ref}
  />
))
TabsContent.displayName = TabsPrimivite.Content.displayName

const Tabs = Object.assign(TabsPrimivite.Root, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export {Tabs}
