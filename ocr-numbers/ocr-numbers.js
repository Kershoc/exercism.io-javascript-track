export const convert = (input) => {
  const ocr = new OCRNumber(input);
  return ocr.parse().toDigits();
};

class OCRNumber {
  static NUMBERS = {
    ' _ | ||_|   ': '0',
    '     |  |   ': '1',
    ' _  _||_    ': '2',
    ' _  _| _|   ': '3',
    '   |_|  |   ': '4',
    ' _ |_  _|   ': '5',
    ' _ |_ |_|   ': '6',
    ' _   |  |   ': '7',
    ' _ |_||_|   ': '8',
    ' _ |_| _|   ': '9'
  };

  static ROW_LENGTH = 4;
  static COL_LENGTH = 3;
  static ROW_SEPARATOR = ',';
  static UNKNOWN_DIGIT = '?';

  _input = '';
  _digits = [];

  constructor(input) {
    this._input = input.split('\n');
    this.validate();
  }

  parse() {
    let rpos = 0;
    for (let [k, row] of this._input.entries()) {
      this.parseRow(row, rpos);
      (k + 1) % OCRNumber.ROW_LENGTH !== 0 ? null : rpos++;
    }
    return this;
  }

  toDigits() {
    let out = "";
    const lastRow = this._digits[this._digits.length-1];
    for (let row of this._digits) {
      for (let digit of row) {
        out += OCRNumber.NUMBERS[digit] ?? OCRNumber.UNKNOWN_DIGIT;
      }
      row === lastRow ? null : out += OCRNumber.ROW_SEPARATOR;
    }
    return out;
  }

  parseRow(row, rpos) {
    this._digits[rpos] = this._digits[rpos] ?? [];
    const parts = row.match(new RegExp('.{1,' + OCRNumber.COL_LENGTH + '}', 'g'));
    let cpos = 0;
    for (let char of parts) {
      this._digits[rpos][cpos] = this._digits[rpos][cpos] ?? '';
      this._digits[rpos][cpos] += char;
      cpos++;
    }
  }

  validate() {
    if (this._input.length % OCRNumber.ROW_LENGTH !== 0) {
      throw new Error("Row length must be a multiple of " + OCRNumber.ROW_LENGTH);
    }
    for (let row of this._input) {
      if (row.length % OCRNumber.COL_LENGTH !== 0) {
        throw new Error("Column length must be a multiple of " + OCRNumber.COL_LENGTH);
      }
    }
  }
}
