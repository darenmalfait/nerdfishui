'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        name="newsletter2"
        label="Subscribe to our newsletter"
        disabled
      />
    </div>
  )
}
