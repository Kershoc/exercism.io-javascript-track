export class Triangle {
  sides = [];

  constructor(...sides) {
    this.sides = sides.sort();
  }

  isTriangle() {
    if (this.sides.length != 3) return false;
    let [a,b,c] = this.sides;
    if (a <= 0 || b <= 0 || c <= 0) return false;
    if (a + b < c) return false;
    return true;
  }

  isEquilateral() {
    if (!this.isTriangle()) return false;
    let [a,b,c] = this.sides;
    return a === c;
  }

  isIsosceles() {
    if (!this.isTriangle()) return false;
    let [a,b,c] = this.sides;
    return a === b || b === c;
  }

  isScalene() {
    if (!this.isTriangle()) return false;
    if (this.isEquilateral() || this.isIsosceles()) return false;
    return true;
  }
}
