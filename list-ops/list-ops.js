export class List {
  constructor(list = []) {
    this._list = list;
  }

  get values() {
    return this._list;
  }

  append(list) {
    return new List([...this._list, ...list.values]);
  }

  concat(listList) {
    return listList.foldl((newList, list) => newList.append(list), new List(this.values));
  }

  filter(filter) {
    return this.foldl((newList, item) => filter(item) ? newList.append(new List([item])) : newList, new List());
  }

  map(map) {
    return this.foldl((newList, item) => newList.append(new List([map(item)])), new List());
  }

  length() {
    return this.foldl((count) => ++count, 0);
  }

  foldl(reducer, accumulator) {
    for (const item of this.values) {
      accumulator = reducer(accumulator, item);
    }
    return accumulator;
  }

  foldr(reducer, accumulator) {
    return this.reverse().foldl(reducer, accumulator);
  }

  reverse() {
    return new List(this.foldl((acc, a) => ([a, ...acc]), []));
  }
}
