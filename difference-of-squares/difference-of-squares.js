export class Squares {
  constructor(nthNumber) {
    this.nthNumber = nthNumber;
  }
  get sumOfSquares() {
    // Σn2 = [n(n+1)(2n+1)]/6
    return (this.nthNumber * (this.nthNumber + 1) * (2 * this.nthNumber + 1)) / 6;
  }

  get squareOfSum() {
    // [n(n+1)/2]^2
    return (this.nthNumber * (this.nthNumber + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
