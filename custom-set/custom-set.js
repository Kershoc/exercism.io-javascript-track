export class CustomSet {
  constructor(input) {
    this._set = new Set(input);
  }

  empty() {
    return this._set.size === 0;
  }

  contains(item) {
    return this._set.has(item);
  }

  add(item) {
    this._set.add(item);
    return this;
  }

  subset(input) {
    const matches = [...this._set.values()].reduce((out, item)=>(input.contains(item) ? out+1 : out),0);
    return matches === this._set.size;
  }

  disjoint(input) {
    const matches = [...this._set.values()].reduce((out, item)=>(!input.contains(item) ? out+1 : out),0);
    return matches === this._set.size;
  }

  eql(input) {
    if (this._set.size !== input._set.size) return false;
    return this.subset(input);
  }

  union(input) {
    return new CustomSet([...this._set.values(), ...input._set.values()]);
  }

  intersection(input) {
    return new CustomSet([...this._set.values()].filter((item)=>input.contains(item)));
  }

  difference(input) {
    return new CustomSet([...this._set.values()].filter((item)=>!input.contains(item)));
  }
}
