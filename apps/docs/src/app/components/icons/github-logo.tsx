import type * as React from 'react'

function GithubLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 45 44"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.477.927C10.485.927.76 10.65.76 22.647c0 9.594 6.223 17.736 14.853 20.61 1.087.198 1.483-.473 1.483-1.049 0-.516-.019-1.881-.03-3.693-6.04 1.312-7.315-2.912-7.315-2.912-.988-2.51-2.412-3.178-2.412-3.178-1.972-1.346.149-1.32.149-1.32 2.18.154 3.327 2.24 3.327 2.24 1.937 3.318 5.084 2.36 6.321 1.803.197-1.403.759-2.36 1.379-2.903-4.823-.549-9.894-2.412-9.894-10.734 0-2.372.847-4.31 2.236-5.828-.224-.55-.969-2.758.214-5.748 0 0 1.822-.584 5.972 2.225 1.732-.481 3.59-.721 5.437-.73 1.845.009 3.703.249 5.437.73 4.147-2.81 5.967-2.225 5.967-2.225 1.185 2.99.44 5.198.217 5.748 1.392 1.518 2.232 3.456 2.232 5.828 0 8.344-5.078 10.18-9.916 10.717.779.67 1.474 1.996 1.474 4.023 0 2.902-.027 5.245-.027 5.957 0 .581.392 1.257 1.493 1.045C37.981 40.375 44.2 32.24 44.2 22.647c0-11.996-9.726-21.72-21.722-21.72"
				fill="currentColor"
			/>
		</svg>
	)
}

export { GithubLogo }
