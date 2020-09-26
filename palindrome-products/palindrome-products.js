export class Palindromes {
  constructor({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }
    this.maxFactor = maxFactor;
    this.minFactor = minFactor;
    this.products = [];
    let range = Array.from({ length: (maxFactor + 1) - minFactor }, (x, i) => i + minFactor);
    this.gen3PalindromeProducts(range);
    this.gen3PalindromeProducts(range.reverse());
  }
  static generate(range) {
    return new Palindromes(range);
  }
  get largest() {
    let product = this.products.sort((a, b) => b - a)[0] || null;
    let factors = this.factor(product);
    return { value: product, factors: factors }
  }
  get smallest() {
    let number = this.products.sort((a, b) => a - b)[0] || null;
    let factors = this.factor(number);
    return { value: number, factors: factors }
  }
  gen3PalindromeProducts(range) {
    let products = [];
    let backwards = range[0] > range[1];
    let rangeEnd = range[range.length - 1];
    for (let number of range) {
      let innerRange = Array.from({ length: Math.abs((rangeEnd + 1) - number) }, (x, i) => (backwards) ? i + rangeEnd : i + number);
      if (backwards) innerRange.reverse();
      for (let number1 of innerRange) {
        let product = number * number1;
        if (this.isPalindrome(product)) {
          products.push(product);
          if (products.length === 3) {
            this.products = [...this.products, ...products];
            return;
          }
        }
      }
    }
  }
  factor(number) {
    let factors = [];
    for (let i = this.minFactor; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        let factor = number / i;
        if (factor > this.maxFactor) continue;
        factors.push([i, factor]);
      }
    }
    return factors;
  }
  isPalindrome(number) {
    return number.toString() === [...number.toString()].reverse().join('');
  }
}
