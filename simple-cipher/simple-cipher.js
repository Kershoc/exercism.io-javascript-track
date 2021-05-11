const LOWERBOUND = 'a'.charCodeAt(0);
const UPPERBOUND = 'z'.charCodeAt(0);
const ALPHABET_LENGTH = 26;

export class Cipher {
  constructor(key) {
    this._key = key ?? this.randomKey;
  }

  encode(input, encode = true) {
    while (this._key.length < input.length) this._key += this._key;
    return [...input].reduce((out, c, i) => out += this.translate(c, i, encode), '');
  }

  decode(input) {
    return this.encode(input, false);
  }

  distance(keyidx) {
    return this._key.charCodeAt(keyidx) - LOWERBOUND;
  }

  wrap(charCode) {
    return (charCode > UPPERBOUND)
      ? charCode - ALPHABET_LENGTH
      : (charCode < LOWERBOUND)
        ? charCode + ALPHABET_LENGTH 
        : charCode;
  }

  translate(char, keyidx, encode = true) {
    let charCode = (encode)
      ? char.charCodeAt(0) + this.distance(keyidx)
      : char.charCodeAt(0) - this.distance(keyidx);
    return String.fromCharCode(this.wrap(charCode));
  }

  get randomKey() {
    return [...Array(100)].reduce((out) => out += String.fromCharCode(LOWERBOUND + Math.floor(Math.random() * ALPHABET_LENGTH)));
  }

  get key() {
    return this._key;
  }
}
