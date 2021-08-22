const LOWERBOUND = 'a'.charCodeAt(0);
const UPPERBOUND = 'z'.charCodeAt(0);
const ALPHABET_LENGTH = 26;

export class Cipher {
  constructor(key) {
    this._key = key ?? this.randomKey;
  }

  encode(input) {
    return [...input].reduce((out, c, i) => out += this.translate(c, this.distance(i)), '');
  }

  decode(input) {
    return [...input].reduce((out, c, i) => out += this.translate(c, 0-this.distance(i)), '');
  }

  distance(keyidx) {
    return this._key.charCodeAt(keyidx%this._key.length) - LOWERBOUND;
  }

  wrap(charCode) {
    if (charCode > UPPERBOUND) return charCode - ALPHABET_LENGTH
    if (charCode < LOWERBOUND) return charCode + ALPHABET_LENGTH 
    return charCode;
  }

  translate(char, distance) {
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
