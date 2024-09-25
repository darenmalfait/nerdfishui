import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineTrack,
	TimelineContent,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { Code, RefreshCw, UserCheck } from 'lucide-react'
import * as React from 'react'

function CustomIcon({
	icon: Icon,
	className,
}: {
	icon: React.ElementType
	className: string
}) {
	return (
		<div
			className={cx(
				'flex size-8 items-center justify-center rounded-full border-2 border-current',
				className,
			)}
		>
			<Icon className="size-4" />
		</div>
	)
}

export function TimelineCustomIconsExample() {
	return (
		<Timeline>
			<TimelineItem>
				<TimelineSeparator>
					<CustomIcon icon={UserCheck} className="text-accent" />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Validate</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<CustomIcon icon={Code} className="text-green-500" />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Build</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<CustomIcon icon={RefreshCw} className="text-red-500" />
				</TimelineSeparator>
				<TimelineContent>Iterate</TimelineContent>
			</TimelineItem>
		</Timeline>
	)
}
