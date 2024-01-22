'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'

const RawSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, children, ...props}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cx(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-inverted/10 dark:bg-inverted/20 relative h-2 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-inverted absolute h-full" />
    </SliderPrimitive.Track>
    {children}
  </SliderPrimitive.Root>
))
RawSlider.displayName = SliderPrimitive.Root.displayName

const Thumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>((props, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    {...props}
    className={cx(
      'border-muted bg-primary focus-visible:ring-ring block h-4 w-4 rounded-full border-2 ring-offset-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-inverted',
      props.className,
    )}
  />
))
Thumb.displayName = SliderPrimitive.Thumb.displayName

const Slider = Object.assign(RawSlider, {
  Thumb,
  Track: SliderPrimitive.Track,
  Range: SliderPrimitive.Range,
})

export {Slider}
