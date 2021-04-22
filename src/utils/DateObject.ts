class DateObject {
  private _time: Date;

  constructor(time: Date) {
    this._time = time;
  }

  public getDay = () => {
    const clone = new Date(this._time.getTime());
    clone.setHours(0);
    clone.setMinutes(0);
    clone.setSeconds(0);
    clone.setMilliseconds(0);
    return clone;
  };

  static now = () => {
    return new DateObject(new Date());
  }
}

export default DateObject;
