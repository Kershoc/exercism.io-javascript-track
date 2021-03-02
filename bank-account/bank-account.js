export class BankAccount {
  constructor() {
    this.reset();
  }

  open() {
    if (this._active) throw new ValueError();
    this._active = true;
  }

  close() {
    if (!this._active) throw new ValueError();
    this.reset();
  }

  deposit(amount) {
    if (!this._active || amount < 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._active || amount < 0 || amount > this._balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    if (!this._active) throw new ValueError();
    return this._balance;
  }

  reset() {
    this._balance = 0;
    this._active = false;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
