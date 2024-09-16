import { CalendarDateTime } from '@internationalized/date'

export function roundToNearest15(date = new Date()) {
	const minutes = 15
	const ms = 1000 * 60 * minutes

	// 👇️ replace Math.round with Math.ceil to always round UP
	return new Date(Math.round(date.getTime() / ms) * ms)
}

export function dateToCalendarDateTime(date: Date): CalendarDateTime {
	return new CalendarDateTime(
		date.getFullYear(),
		date.getMonth() + 1, // JavaScript months are 0-based
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds(),
	)
}

export { CalendarDateTime } from '@internationalized/date'
export { Time } from '@internationalized/date'
