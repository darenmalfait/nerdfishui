'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxWithText() {
  return (
    <div className="items-top flex flex-col space-x-2">
      <Checkbox name="newsletters3" label="Subscribe to our newsletter" />
      <p className="text-sm text-gray-500 dark:text-gray-400">
        We&apos;ll send you the latest news and updates.
      </p>
    </div>
  )
}
