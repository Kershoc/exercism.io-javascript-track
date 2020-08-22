export class Clock {
  static DAY_IN_MINUTES = 1440;
  constructor(hours, minutes = 0) {
    this._minutes = hours*60 + minutes;
    while (this._minutes < 0) {
        this._minutes += Clock.DAY_IN_MINUTES;
    }
    this._minutes %= Clock.DAY_IN_MINUTES;
}

  toString() {
    return `${Math.floor(this._minutes/60).toString().padStart(2,0)}:${(this._minutes%60).toString().padStart(2,0)}`;
  }

  plus(minutes) {
    return new Clock(0, this._minutes + minutes);
  }

  minus(minutes) {
    return new Clock(0, this._minutes - minutes);
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
