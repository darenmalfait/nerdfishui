'use client'

import * as React from 'react'
import {Button, Toast} from '@nerdfish/ui'

function ExampleToast(props: React.ComponentProps<typeof Toast>) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Toast</Button>
      <Toast
        {...props}
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

export function ToastVariant() {
  return (
    <div className="flex flex-wrap gap-3 p-8">
      <ExampleToast variant="default" title="example title">
        Default Example
      </ExampleToast>
      <ExampleToast variant="success" title="Success Example">
        Success Example
      </ExampleToast>
      <ExampleToast variant="warning" title="Warning Example">
        Warning Example
      </ExampleToast>
      <ExampleToast variant="info" title="Info Example">
        Info Example
      </ExampleToast>
      <ExampleToast variant="danger" title="Danger Example">
        Danger Example
      </ExampleToast>
    </div>
  )
}
