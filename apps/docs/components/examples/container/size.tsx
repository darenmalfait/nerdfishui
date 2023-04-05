'use client'

import * as React from 'react'
import {Container, Grid} from '@nerdfish/ui'

export function ContainerSize() {
  return (
    <div className="w-full space-y-2">
      <Grid nested>
        <Container size="small">
          <div>Hello world</div>
          <div>Hello world</div>
        </Container>
        <Container size="default">
          <div>Hello world</div>
          <div>Hello world</div>
        </Container>
        <Container size="medium">
          <div>Hello world</div>
          <div>Hello world</div>
        </Container>
        <Container size="full">
          <div>Hello world</div>
          <div>Hello world</div>
        </Container>
      </Grid>
    </div>
  )
}
