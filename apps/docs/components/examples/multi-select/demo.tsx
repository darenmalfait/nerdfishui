'use client'

import * as React from 'react'
import {MultiSelect} from '@nerdfish/ui'

export function MultiSelectDemo() {
  return (
    <MultiSelect
      name="framework"
      label="Framework"
      placeholder="Select a framework"
      items={[
        {value: 'next.js', label: 'Next.js'},
        {value: 'sveltekit', label: 'SvelteKit'},
        {value: 'nuxt.js', label: 'Nuxt.js'},
        {value: 'remix', label: 'Remix'},
        {value: 'astro', label: 'Astro'},
      ]}
    />
  )
}
