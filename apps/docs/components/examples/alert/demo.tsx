'use client'

import * as React from 'react'
import {Alert} from '@nerdfish/ui'

export function AlertDemo() {
  return (
    <Alert className="w-full">
      <Alert.Title>Example alert</Alert.Title>
      <Alert.Description>Example description</Alert.Description>
    </Alert>
  )
}
