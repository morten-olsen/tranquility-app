export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 26 * HOUR;

export const getDayFromTime = (time: number) => {
  const current = new Date(time);
  current.setSeconds(0);
  current.setMinutes(0);
  current.setHours(0);
  current.setMilliseconds(0);
  return current.getTime();
}

const DAY_NAMES = [
  'Monday',
  'Tueday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDay = (time: number) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`
}

export const dateName = (time: number) => {
  const day = getDayFromTime(time);
  const date = new Date(time);
  const today = getDayFromTime(new Date().getTime());
  const tomorrow = getDayFromTime(new Date().getTime() + DAY);
  const nextWeek = getDayFromTime(new Date().getTime() + (DAY * 6));
  if (day === today) {
    return 'Today';
  }
  if (day === tomorrow) {
    return 'Tomorrow';
  }
  if (day < nextWeek && day > today) {
    return DAY_NAMES[date.getDay()];
  }
  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
}
