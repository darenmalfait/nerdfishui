'use client'

import * as React from 'react'
import {Grid} from '@nerdfish/ui'

export function GridDemo() {
  return (
    <Grid nested>
      <div className="col-span-full">col-span-full</div>
      <div className="col-span-4">col-span-4</div>
      <div className="col-span-4">col-span-4</div>
      <div className="col-span-4">col-span-4</div>
    </Grid>
  )
}
