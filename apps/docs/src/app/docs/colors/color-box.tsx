import { cx } from '@nerdfish/utils'

export function ColorBox({
	className,
	value,
}: {
	className?: string
	value: string
}) {
	return (
		<div>
			<div
				className={cx('rounded-container p-sm inline-block w-auto', className)}
			>
				<span className="text-current">{value}</span>
			</div>
		</div>
	)
}
