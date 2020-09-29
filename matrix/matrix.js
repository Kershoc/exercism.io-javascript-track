export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map(row=>row.split(' ').map(num=>parseInt(num)));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    let cols = [];
    this._rows.map(row=> {
      for (const [idx,value] of row.entries()) {
        cols[idx] ? cols[idx].push(value) : cols[idx] = [value];
      }
    });
    return cols;
  }
}
