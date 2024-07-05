'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

import { CodeBlockWrapper } from './code-block-wrapper'

type ComponentSourceProps = React.HTMLAttributes<HTMLDivElement>

export function ComponentSource({ children, className }: ComponentSourceProps) {
	return (
		<CodeBlockWrapper
			expandButtonTitle="View Primitive"
			className={cx('my-6 overflow-hidden rounded-md', className)}
		>
			{children}
		</CodeBlockWrapper>
	)
}
