'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxDisabled() {
  return (
    <div className="flex flex-col items-center gap-6 space-x-2">
      <Checkbox
        name="newsletter2"
        label="Subscribe to our newsletter"
        disabled
      />
      <Checkbox
        checked
        name="newsletter3"
        label="Subscribe to our newsletter"
        disabled
      />
    </div>
  )
}
