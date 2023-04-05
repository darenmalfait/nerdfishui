'use client'

import * as React from 'react'
import {Container, Grid} from '@nerdfish/ui'

export function ContainerDemo() {
  return (
    <div className="w-full space-y-2">
      <Grid nested>
        <Container>
          <div>Hello world</div>
          <div>Hello world</div>
        </Container>
      </Grid>
    </div>
  )
}
