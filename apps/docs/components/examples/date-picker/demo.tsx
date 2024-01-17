'use client'

import * as React from 'react'
import {DatePicker} from '@nerdfish/ui'

export function DatePickerDemo() {
  return (
    <DatePicker
      presets={[
        {
          value: '0',
          label: 'Today',
        },
        {
          value: '1',
          label: 'Tomorrow',
        },
        {
          value: '7',
          label: 'Next week',
        },
      ]}
      onSelect={date => console.info(date)}
    />
  )
}
