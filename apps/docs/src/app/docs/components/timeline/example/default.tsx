import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineIcon,
	TimelineTrack,
	TimelineContent,
} from '@nerdfish/ui'

export function TimelineExample() {
	return (
		<Timeline>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineIcon />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Validate</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<TimelineIcon />
					<TimelineTrack />
				</TimelineSeparator>
				<TimelineContent>Build</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineTrack />
					<TimelineIcon />
				</TimelineSeparator>
				<TimelineContent>Iterate</TimelineContent>
			</TimelineItem>
		</Timeline>
	)
}
