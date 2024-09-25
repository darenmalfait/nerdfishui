import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineIcon,
	TimelineTrack,
	TimelineContent,
} from '@nerdfish/ui'

export function TimelineColorsExample() {
	return (
		<Timeline>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineIcon className="text-accent" />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Validate</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<TimelineIcon className="text-green-500" />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Build</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<TimelineIcon className="text-red-500" />
				</TimelineSeparator>
				<TimelineContent>Iterate</TimelineContent>
			</TimelineItem>
		</Timeline>
	)
}
