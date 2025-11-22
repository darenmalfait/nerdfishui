'use client'

import {
	CalendarMini,
	CalendarMiniDay,
	CalendarMiniDays,
	CalendarMiniNavigation,
} from '@nerdfish/react/calendar-mini'

export function CalendarMiniExample() {
	return (
		<CalendarMini>
			<CalendarMiniNavigation direction="prev" />
			<CalendarMiniDays>
				{(date) => <CalendarMiniDay date={date} key={date.toISOString()} />}
			</CalendarMiniDays>
			<CalendarMiniNavigation direction="next" />
		</CalendarMini>
	)
}
