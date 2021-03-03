export class Rational {
  constructor(a, b) {
    if (b === 0) throw new Error('Divide By Zero Error');
    this._a = a;
    this._b = b;
  }

  add(rational) {
    return new Rational(this._a * rational._b + rational._a * this._b, this._b * rational._b).reduce();
  }

  sub(rational) {
    return new Rational(this._a * rational._b - rational._a * this._b, this._b * rational._b).reduce();
  }

  mul(rational) {
    return new Rational(this._a * rational._a, this._b * rational._b).reduce();
  }

  div(rational) {
    return new Rational(this._a * rational._b, rational._a * this._b).reduce();
  }

  abs() {
    return new Rational(Math.abs(this._a), Math.abs(this._b));
  }

  exprational(exponent) {
    const e = Math.abs(exponent);
    return new Rational(this._a ** e, this._b ** e);
  }

  expreal(real) {
    return Math.round(real ** (this._a / this._b) * 100) / 100;
  }

  reduce() {
    let d = gcd(this._a, this._b);
    d = this._b < 0 ? -d : d;
    return new Rational(this._a / d, this._b / d);
  }
}

const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
