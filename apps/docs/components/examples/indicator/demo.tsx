'use client'

import * as React from 'react'
import {Indicator} from '@nerdfish/ui'

export function IndicatorDemo() {
  return (
    <Indicator>
      <Indicator.Item>
        <div className="size-4 rounded-full bg-pink-500" />
      </Indicator.Item>
      <div className="grid size-32 place-items-center bg-muted">content</div>
    </Indicator>
  )
}
