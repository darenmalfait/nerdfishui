'use client'

import * as React from 'react'
import {Combobox} from '@nerdfish/ui'

export function ComboboxDemo() {
  return (
    <Combobox
      name="framework"
      label="Framework"
      emptyString="No frameworks found"
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
