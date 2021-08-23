const LOWERBOUND = 'a'.charCodeAt(0);
const UPPERBOUND = 'z'.charCodeAt(0);
const ALPHABET_LENGTH = 26;
const FORWARD = 1;
const BACKWARD = -1;

export class Cipher {
  constructor(key) {
    this._key = key ?? this.randomKey;
  }

  encode(input) {
    return this.translate(input, FORWARD);
  }

  decode(input) {
    return this.translate(input, BACKWARD);
  }

  distance(keyidx) {
    return this._key.charCodeAt(keyidx%this._key.length) - LOWERBOUND;
  }

  wrap(charCode) {
    if (charCode > UPPERBOUND) return charCode - ALPHABET_LENGTH
    if (charCode < LOWERBOUND) return charCode + ALPHABET_LENGTH 
    return charCode;
  }

  translate(input, direction) {
    return [...input].reduce((out, c, i) => out += this.translateChar(c, this.distance(i)*direction), '');
  }

  translateChar(char, distance) {
    return String.fromCharCode(this.wrap(char.charCodeAt(0) + distance));
  }

  randomChar() {
    return String.fromCharCode(LOWERBOUND + Math.floor(Math.random() * ALPHABET_LENGTH));
  }

  get randomKey() {
    return [...Array(100)].reduce((out) => out += this.randomChar());
  }

  get key() {
    return this._key;
  }
}
