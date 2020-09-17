export const annotate = (input) => {
  return new Board(input).solve();
}

class Board {
  static MINE = '*';
  constructor(board) {
    this._board = board.map(row => [...row]);
  }
  solve() {
    for (let [rowKey, row] of this._board.entries()) {
      if (!row.includes(Board.MINE)) continue;
      for (let [colKey, col] of row.entries()) {
        if (col === Board.MINE) this.walkAround(rowKey, colKey);
      }
    }
    return this._board.map(row => row.join(''));
  }
  walkAround(rowKey, colKey) {
    let prevRow = rowKey - 1;
    let nextRow = rowKey + 1;
    let prevCol = colKey - 1;
    let nextCol = colKey + 1;
    let width = this._board[rowKey].length;
    let height = this._board.length;

    //Walk Previous Row
    if (prevRow >= 0) {
      if (prevCol >= 0) this.mark(prevRow, prevCol);
      this.mark(prevRow, colKey);
      if (nextCol < width) this.mark(prevRow, nextCol);
    }

    //Walk Current Row
    if (prevCol >= 0) this.mark(rowKey, prevCol);
    if (nextCol < width) this.mark(rowKey, nextCol);

    //Walk Next Row
    if (nextRow < height) {
      if (prevCol >= 0) this.mark(nextRow, prevCol);
      this.mark(nextRow, colKey);
      if (nextCol < width) this.mark(nextRow, nextCol);
    }
  }
  mark(row, col) {
    if (this._board[row][col] !== Board.MINE) this._board[row][col]++;
  }
}
