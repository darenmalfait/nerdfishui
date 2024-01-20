'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxWithText() {
  return (
    <div className="items-top flex flex-col space-y-2">
      <Checkbox name="newsletters3" label="Subscribe to our newsletter" />
      <p className="mt-2 text-sm text-muted">
        We&apos;ll send you the latest news and updates.
      </p>
    </div>
  )
}
