import { Service } from 'typedi';

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 26 * HOUR;

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

@Service()
class TimeService {
  public getUTC = () => {
    return new Date(new Date().getUTCDate());
  }

  public get today() {
    return this.getDateString(new Date().getTime());
  }

  public getDateString = (date: number) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate()}`;
  };

  public formatDate = (day: string) => {
    const date = new Date(day);
    const today = this.getDateString(new Date().getTime());
    const tomorrow = this.getDateString(new Date().getTime() + DAY);
    const nextWeek = this.getDateString(new Date().getTime() + (DAY * 6));
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
  };
}

export default TimeService;
