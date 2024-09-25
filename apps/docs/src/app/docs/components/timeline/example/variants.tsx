import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineIcon,
	TimelineTrack,
	TimelineContent,
} from '@nerdfish/ui'

export function TimelineVariantsExample() {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">Outline</h3>
			<Timeline variant="outline">
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
		</div>
	)
}
