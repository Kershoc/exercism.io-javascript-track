const INTL_WEEKDAY = { weekday: 'long' }
const DAY_ORDER = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  last: -1
}

export const meetup = (year, month, descriptor, day) => {
  let dayOfMonth = (descriptor === 'teenth')
    ? getTeenth(day, month, year)
    : getWeekday(year, month, descriptor, day);
  return new Date(year, month - 1, dayOfMonth);
}

const getWeekday = (year, month, descriptor, day) => {
  let count = 0;
  let last = 0;
  let lastDayOfMonth = new Date(year, month, 0).getDate();
  for (let dayOfMonth = 1; dayOfMonth <= lastDayOfMonth; dayOfMonth++) {
    let subject = new Date(year, month - 1, dayOfMonth);
    let dayOfWeek = new Intl.DateTimeFormat('en-US', INTL_WEEKDAY).format(subject);
    if (day === dayOfWeek) {
      count++;
      if (count === DAY_ORDER[descriptor]) return dayOfMonth;
      last = dayOfMonth;
    }
  }
  return last;
}

const getTeenth = (day, month, year) => {
  for (let dayOfMonth = 13; dayOfMonth <= 19; dayOfMonth++) {
    let subject = new Date(year, month - 1, dayOfMonth);
    let dayOfWeek = new Intl.DateTimeFormat('en-US', INTL_WEEKDAY).format(subject);
    if (day === dayOfWeek) return dayOfMonth;
  }
}
