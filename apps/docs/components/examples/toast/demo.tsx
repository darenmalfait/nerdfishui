'use client'

import * as React from 'react'
import {Button, toast} from '@nerdfish/ui'

export function ToastDemo() {
  return <Button onClick={() => toast.message('Hi there')}>Show Toast</Button>
}
