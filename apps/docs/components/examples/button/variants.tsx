'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'

export function ButtonVariants() {
  return (
    <div className="flex space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="nerdfish">Nerdfish</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
