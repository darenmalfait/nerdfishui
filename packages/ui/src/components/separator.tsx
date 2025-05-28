'use client'

import { cx } from '@nerdfish/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import * as React from 'react'

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
	(
		{ className, orientation = 'horizontal', decorative = true, ...props },
		ref,
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cx(
				'bg-foreground/20 shrink-0',
				orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
				className,
			)}
			{...props}
		/>
	),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
