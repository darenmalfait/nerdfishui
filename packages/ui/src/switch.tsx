'use client'

import { cx } from '@nerdfish/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { getInputClassName } from './input'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cx(
			getInputClassName(),
			// basic styles
			'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full p-0 transition-colors',
			// checked state
			'data-[state=checked]:bg-inverted dark:data-[state=checked]:bg-inverted/50 data-[state=checked]:border-transparent',
			// disabled state
			'disabled-within:opacity-50 disabled-within:cursor-not-allowed disabled-within:shadow-none disabled-within:hover:border-transparent',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cx(
				'bg-primary dark:bg-inverted data-[state=checked]:bg-primary pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
			)}
		/>
	</SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
