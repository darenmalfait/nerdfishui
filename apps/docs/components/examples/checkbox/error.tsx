'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxError() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        name="newsletter6"
        label="Subscribe to our newsletter"
        error="This is an error message"
      />
    </div>
  )
}
