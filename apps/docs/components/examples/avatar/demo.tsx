'use client'

import * as React from 'react'
import {Avatar} from '@nerdfish/ui'

export function AvatarDemo() {
  return (
    <Avatar>
      <Avatar.Image
        src="https://avatars.githubusercontent.com/u/56068461?s=40&v=4"
        alt="@darenmalfait"
      />
      <Avatar.Fallback>DM</Avatar.Fallback>
    </Avatar>
  )
}
