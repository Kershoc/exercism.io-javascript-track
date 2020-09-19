export class Zipper {
  constructor(tree, parent) {
    this._tree = tree;
    this._parent = parent || null;
  }

  static fromTree(tree) {
    return new Zipper(clone(tree));
  }

  toTree() {
    return this._parent ? this._parent.toTree() : this._tree;
  }

  value() {
    return this._tree.value;
  }

  left() {
    this._tree.left = clone(this._tree.left);
    return this._tree.left ? new Zipper(this._tree.left, this) : null;
  }

  right() {
    this._tree.right = clone(this._tree.right);
    return this._tree.right ? new Zipper(this._tree.right, this) : null;
  }

  up() {
    return this._parent;
  }

  setValue(val) {
    this._tree.value = val;
    return new Zipper(this._tree, this._parent);
  }

  setLeft(leaf) {
    this._tree.left = leaf;
    return new Zipper(this._tree, this._parent);
  }

  setRight(leaf) {
    this._tree.right = leaf;
    return new Zipper(this._tree, this._parent);
  }
}
const clone = obj => obj && Object.assign({}, obj);
