'use client'

import * as React from 'react'
import {Badge, Indicator} from '@nerdfish/ui'

export function IndicatorItemDemo() {
  return (
    <Indicator>
      <Indicator.Item>
        <Badge>99+</Badge>
      </Indicator.Item>
      <div className="grid size-32 place-items-center bg-muted">content</div>
    </Indicator>
  )
}
