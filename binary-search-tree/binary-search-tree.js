export class BinarySearchTree {
  constructor(input) {
    this._data = input;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }

  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(input) {
    if (input <= this.data) {
      (this.left) ? this.left.insert(input) : this._left = new BinarySearchTree(input);
    } else {
      (this.right) ? this.right.insert(input) : this._right = new BinarySearchTree(input);
    }
  }

  each(fn) {
    if (this.left) this.left.each(fn);
    fn(this.data);
    if (this.right) this.right.each(fn);
  }
}
