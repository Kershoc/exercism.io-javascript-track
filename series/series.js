export class Series {
  constructor(series) {
    this._series = [...series].map(num=>parseInt(num));
  }

  get digits() {
    return this._series;
  }

  slices(size) {
    if (size > this._series.length) throw new Error('Slice size is too big.');
    let slices = [];
    for (let i = 0; i<=this._series.length-size;i++) {
      slices.push(this._series.slice(i,i+size));
    }
    return slices;
  }
}
