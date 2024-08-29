'use client'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import type * as React from 'react'

export const CollapsibleRoot = CollapsiblePrimitive.Root
export const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
export const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export type CollapsibleRootProps = React.ComponentPropsWithoutRef<
	typeof CollapsibleRoot
>
export type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
	typeof CollapsibleTrigger
>
export type CollapsibleContentProps = React.ComponentPropsWithoutRef<
	typeof CollapsibleContent
>
