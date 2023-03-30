'use client'

import * as React from 'react'
import {Button, Collapsible} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  expandButtonTitle = 'View Code',
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cx('relative overflow-hidden', className)} {...props}>
        <Collapsible.Content
          forceMount
          className={cx('overflow-hidden', !isOpened && 'max-h-32')}
        >
          <div
            className={cx(
              '[&_pre]:max-h-[650px [&_pre]:my-0 [&_pre]:pb-[100px]',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]',
            )}
          >
            {children}
          </div>
        </Collapsible.Content>
        <div
          className={cx(
            'absolute flex items-center justify-center bg-gradient-to-b from-gray-900/30 to-gray-900/90 p-2',
            isOpened ? 'inset-x-0 bottom-3 h-12' : 'inset-0',
          )}
        >
          <Collapsible.Trigger asChild>
            <Button variant="subtle" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>
    </Collapsible>
  )
}
