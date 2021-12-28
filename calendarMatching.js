function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, duration) {
    // time between endtime and start time 
    const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1)
    const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2)
    // merge the two updated calendars 
    const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2)
    const flattenedCalendar = flattenCalendar(mergedCalendar)
    const result = getMatchingSlots(flattenedCalendar, duration)
    return result
}

function getMatchingSlots(calendar, duration) {
    const matchingSlots = []
    for (let i = 1; i < calendar.length; i++) {
        const start = calendar[i - 1][1]
        const end = calendar[i][0]
        const availDuration = end - start
        if (availDuration >= duration) {
            matchingSlots.push([start, end])
        }

    }
    const convertedToTime = matchingSlots.map((slot) => [minuteToTime(slot[0]), minuteToTime(slot[1])])
    return convertedToTime
}

function minuteToTime(minutes) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const hourStr = hours.toString()
    const minStr = mins < 10 ? "0" + mins.toString() : mins.toString()
    return hourStr + ":" + minStr
}
function flattenCalendar(calendar) {
    const flattened = [calendar[0]]
    for (let i = 1; i < calendar.length; i++) {
        const current = calendar[i]
        let lastAdded = flattened[flattened.length - 1]
        const [start, end] = current
        const [lStart, lEnd] = lastAdded
        if (lEnd > start) {
            let temp = [lStart, Math.max(lEnd, end)]
            flattened[flattened.length - 1] = temp
        } else {
            flattened.push(current)
        }
    }
    return flattened
}
function mergeCalendars(calendar1, calendar2) {
    const merged = []
    let cal1 = 0
    let cal2 = 0
    while (cal1 < calendar1.length && cal2 < calendar2.length) {
        if (calendar1[cal1][0] < calendar2[cal2][0]) {
            merged.push(calendar1[cal1])
            cal1++
        } else {
            merged.push(calendar2[cal2])
            cal2++
        }
    }

    while (cal1 < calendar1.length) {
        merged.push(calendar1[cal1])
        cal1++
    }

    while (cal2 < calendar2.length) {
        merged.push(calendar2[cal2])
        cal2++
    }
    return merged
}
function updateCalendar(calendar, dailyBounds) {
    const updatedCalendar = calendar.slice()
    updatedCalendar.unshift(['0:00', dailyBounds[0]])
    updatedCalendar.push([dailyBounds[1], '23:59'])
    const convertedCalendar = updatedCalendar.map((time) => [timeToMinutes(time[0]), timeToMinutes(time[1])])
    return convertedCalendar
}

function timeToMinutes(time) {
    const [hour, minutes] = time.split(':').map((strTime) => parseInt(strTime))
    return hour * 60 + minutes
}



const c1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
const c2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
const d1 = ['9:00', '20:00']
const d2 = ['10:00', '18:30']
const duration = 30

console.log(calendarMatching(c1, d1, c2, d2, duration));