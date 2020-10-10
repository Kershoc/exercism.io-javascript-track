export class ComplexNumber {
  constructor(real, imaginary) {
    this._a = real;
    this._b = imaginary;
  }

  get real() {
    return this._a;
  }

  get imag() {
    return this._b;
  }

  add(cNum) {
    return new ComplexNumber((this.real + cNum.real), (this.imag + cNum.imag));
  }

  sub(cNum) {
    return new ComplexNumber((this.real - cNum.real), (this.imag - cNum.imag));
  }

  div(cNum) {
    //(a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2)
    return new ComplexNumber((this.real * cNum.real + this.imag * cNum.imag) / (cNum.real ** 2 + cNum.imag ** 2),
      (this.imag * cNum.real - this.real * cNum.imag) / (cNum.real ** 2 + cNum.imag ** 2));
  }

  mul(cNum) {
    // (a * c - b * d) + (b * c + a * d)
    return new ComplexNumber((this.real * cNum.real - this.imag * cNum.imag),
      (this.imag * cNum.real + this.real * cNum.imag));
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this.real, 0 - this.imag);
  }

  get exp() {
    const exp = Math.exp(this.real);
    return new ComplexNumber(exp * Math.cos(this.imag), exp * Math.sin(this.imag));
  }
}
