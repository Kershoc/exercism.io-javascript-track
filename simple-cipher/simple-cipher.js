const LOWERBOUND = 'a'.charCodeAt(0);
const UPPERBOUND = 'z'.charCodeAt(0);
const ALPHABET_LENGTH = 26;

export class Cipher {
  constructor(key) {
    this._key = key ?? this.randomKey;
  }

  encode(input, encode = true) {
    return [...input].reduce((out, c, i) => out += this.translate(c, i, encode), '');
  }

  decode(input) {
    return this.encode(input, false);
  }

  distance(keyidx) {
    return this._key.charCodeAt(keyidx%this._key.length) - LOWERBOUND;
  }

  wrap(charCode) {
    if (charCode > UPPERBOUND) return charCode - ALPHABET_LENGTH
    if (charCode < LOWERBOUND) return charCode + ALPHABET_LENGTH 
    return charCode;
  }

  translate(char, keyidx, encode = true) {
    let charCode = (encode)
      ? char.charCodeAt(0) + this.distance(keyidx)
      : char.charCodeAt(0) - this.distance(keyidx);
    return String.fromCharCode(this.wrap(charCode));
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
