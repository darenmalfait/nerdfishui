import * as React from 'react'
import {Input} from '@nerdfish/ui'

export function InputDemo() {
  return (
    <Input
      name="email"
      label="email"
      description="your login name"
      type="email"
      placeholder="Email"
    />
  )
}
