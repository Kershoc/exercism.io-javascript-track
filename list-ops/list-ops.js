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
    let newList = new List(this.values);
    for (const list of listList.values) {
      newList = newList.append(list);
    }
    return newList;
  }

  filter(filter) {
    let newList = new List();
    for (const item of this.values) {
      if (filter(item)) {
        newList = newList.append(new List([item]));
      }
    }
    return newList;    
  }

  map(map) {
    let newList = new List();
    for (const item of this.values) {
      newList = newList.append(new List([map(item)]));
    }
    return newList;    
  }

  length() {
    let count = 0;
    for (const item of this.values) {
      count++;
    }
    return count;
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
