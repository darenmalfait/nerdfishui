'use client'

import * as React from 'react'
import {Button, Toast} from '@nerdfish/ui'

export function ToastDemo() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Toast</Button>
      <Toast
        title="example title"
        open={isOpen}
        onOpenChange={open => setIsOpen(open)}
        duration={3000}
      >
        Content of the toast
      </Toast>
    </>
  )
}
