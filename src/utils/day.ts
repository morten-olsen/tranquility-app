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

