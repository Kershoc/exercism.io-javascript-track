export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(list) {
    this._head = null;
    this._length = 0;
    if (list) {
      for (const value of list) {
        const element = new Element(value);
        this.add(element);
      }
    }
  }

  add(nextValue) {
    nextValue.next = this._head;
    this._head = nextValue;
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let node = this._head;
    return Array.from({ length: this.length }, () => {
      const value = node.value;
      node = node.next;
      return value;
    });
  }

  reverse() {
    return new List(this.toArray());
  }
}
