'use client'

import * as React from 'react'
import {Slider} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({className, ...props}: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cx('w-[60%]', className)}
      {...props}
    />
  )
}
