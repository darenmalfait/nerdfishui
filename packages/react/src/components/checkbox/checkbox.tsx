'use client'

import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox'
import { cn } from '@nerdfish/utils/class'
import { CheckIcon, MinusIcon } from 'lucide-react'
import { type ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>
export function Checkbox({ className, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'peer bg-background-muted focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:focus:ring-destructive/50 data-checked:border-border data-checked:bg-background data-checked:text-foreground data-indeterminate:text-foreground hover:border-ring/70 flex size-5 items-center justify-center rounded-md border transition-[color,box-shadow,border-color] duration-150 outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="block data-unchecked:hidden"
			>
				{props.indeterminate ? (
					<MinusIcon className="size-3.5" />
				) : (
					<CheckIcon className="size-3.5" />
				)}
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}
