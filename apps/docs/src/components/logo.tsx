import * as React from 'react'

function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="-1 -1 1958 1958"
			{...props}
		>
			<g
				className="fill-black stroke-black text-current dark:fill-white dark:stroke-white"
				fillRule="evenodd"
			>
				<path
					className="stroke-black dark:stroke-white"
					d="M978 1956c540.134 0 978-437.866 978-978S1518.134 0 978 0 0 437.866 0 978s437.866 978 978 978zm.5-65c503.96 0 912.5-408.54 912.5-912.5S1482.46 66 978.5 66 66 474.54 66 978.5 474.54 1891 978.5 1891z"
				/>
				<path
					className="text-primary fill-black stroke-black dark:fill-white dark:stroke-white"
					d="M694.045 446H618v1065h76.045V446zM845 446h127.206c84.05 0 157.841 14 221.379 42 63.537 28 116.317 66 158.342 114 42.024 48 73.542 104.25 94.555 168.75C1467.494 835.25 1478 904 1478 977c0 81-11.757 154.25-35.27 219.75-23.514 65.5-57.284 121.5-101.31 168-44.025 46.5-97.306 82.5-159.842 108-62.537 25.5-132.327 38.25-209.372 38.25H845v-69h127.206c70.041 0 131.826-11.75 185.358-35.25 53.531-23.5 98.307-56.25 134.328-98.25 36.02-42 63.286-91.25 81.797-147.75 18.511-56.5 27.766-117.75 27.766-183.75 0-67-9.505-128.75-28.516-185.25-19.011-56.5-46.777-105.25-83.299-146.25-36.52-41-81.297-73-134.328-96-53.03-23-114.066-34.5-183.106-34.5H845v-69z"
				/>
			</g>
		</svg>
	)
}

export { Logo }
