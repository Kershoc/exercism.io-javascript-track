class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    const node = this.tail;
    if (node.prev) {
      node.prev.next = null;
      this.tail = node.prev;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return node.data;
  }

  shift() {
    const node = this.head;
    if (node.next) {
      node.next.prev = null;
    }
    this.head = node.next;
    this.length--;
    return node.data;
  }

  unshift(data) {
    const node = new Node(data);
    if (this.length) {
      this.head.prev = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  delete(value) {
    let node = this.head;
    while (node.data !== value && node.next) {
      node = node.next;
    }
    if (node.data === value) {
      (node.prev) ? node.prev.next = node.next : this.head = node.next;
      (node.next) ? node.next.prev = node.prev : this.tail = node.prev;
      this.length--;
    }
  }

  count() {
    return this.length;
  }
}
