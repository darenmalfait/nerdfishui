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
      'inline-flex items-center justify-center rounded-md bg-gray-100 p-1 dark:bg-gray-800',
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
      'inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-gray-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:text-gray-200 dark:data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-100',
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
      'mt-2 rounded-md bg-primary border border-gray-200 p-6 dark:border-gray-700',
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
