'use client'

import { cx } from '@nerdfish/utils'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const Fish = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>(function Fish({ className, ...props }, ref) {
	return (
		<span className="animate-shake repeat-infinite [animation-duration:4s]">
			<svg
				ref={ref}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 912 421"
				className={cx(
					'direction-reverse fill-primary animate-squeeze repeat-infinite [animation-duration:2s]',
					className,
				)}
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M911.633 210h.002l-.001.25.001.25h-.002c-.503 70.167-106.5 210-316.998 210-179.361 0-351.372-125.661-440.759-199.817L9.03 304.582c-4.971 2.88-10.757-2.2-8.545-7.502l35.836-85.89a5.989 5.989 0 0 1 2.22-2.69 5.989 5.989 0 0 1-2.22-2.69L.485 119.92c-2.212-5.302 3.574-10.382 8.545-7.502l147.333 85.34C246.428 123.36 416.924 0 594.635 0 805.133 0 911.13 139.833 911.633 210Zm-100.998.5c0-15.464 12.536-28 28-28s28 12.536 28 28-12.536 28-28 28-28-12.536-28-28Z"
				/>
			</svg>
		</span>
	)
})

const Classic = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'>
>(function Classic({ className, ...props }, ref) {
	return (
		<Loader2 ref={ref} className={cx('animate-spin', className)} {...props} />
	)
})

const LoaderMap = {
	fish: Fish,
	classic: Classic,
}

export const LoadingAnimation = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'> & {
		variant?: keyof typeof LoaderMap
	}
>(function LoadingAnimation({ className, variant = 'fish', ...props }, ref) {
	const Loader = LoaderMap[variant]

	return <Loader ref={ref} className={cx('size-10', className)} {...props} />
})

export type LoadingAnimationProps = React.ComponentPropsWithoutRef<
	typeof LoadingAnimation
>
