export class Triplet {
  constructor(a, b, c) {
    this._a = a;
    this._b = b;
    this._c = c;
  }

  sum() {
    return this._a + this._b + this._c;
  }

  product() {
    return this._a * this._b * this._c;
  }

  isPythagorean() {
    return this._a ** 2 + this._b ** 2 == this._c ** 2 && this._a < this._b < this._c;
  }

  static where({ minFactor = 3, maxFactor, sum }) {
    const isInRange = (num) => num >= minFactor && num <= maxFactor;
    let triplets = [];
    let a, b, c = 0;
    for (a = 3; c < maxFactor; a += 2) {
      // N, (N2/2 -0.5), (N2/2 +0.5)
      b = a ** 2 / 2 - 0.5;
      c = a ** 2 / 2 + 0.5;
      let ai, bi, ci = 0;
      for (let i = 1; ci < maxFactor; i++) {
        ai = i * a; bi = i * b; ci = i * c;
        if (isInRange(ai) && isInRange(bi) && isInRange(ci)) triplets.push(new Triplet(ai, bi, ci));
      }
    }
    return sum ? triplets.filter(o => o.sum() == sum).reverse() : triplets;
  }
}
