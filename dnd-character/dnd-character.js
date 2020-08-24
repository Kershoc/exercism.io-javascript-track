export const abilityModifier = (modifier) => {
  if (modifier < 3) throw new Error('Ability scores must be at least 3');
  if (modifier > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((modifier - 10)/2);
};

export class Character {
  static rollAbility() {
    let min = 1; // inclusive
    let max = 7; // exclusive
    let rolls = [...new Array(4)].map(() => Math.floor(Math.random() * (max - min) + min))
    rolls.sort((a, b) => a - b).shift();
    return rolls.reduce((sum, x) => sum + x);
  }

  get strength() {
    if (!this._strength) this._strength = Character.rollAbility();
    return this._strength;
  }

  get dexterity() {
    if (!this._dexterity) this._dexterity = Character.rollAbility();
    return this._dexterity;
  }

  get constitution() {
    if (!this._constitution) this._constitution = Character.rollAbility();
    return this._constitution;
  }

  get intelligence() {
    if (!this._intelligence) this._intelligence = Character.rollAbility();
    return this._intelligence;
  }

  get wisdom() {
    if (!this._wisdom) this._wisdom = Character.rollAbility();
    return this._wisdom;
  }

  get charisma() {
    if (!this._charisma) this._charisma = Character.rollAbility();
    return this._charisma;
  }

  get hitpoints() {
    if (!this._hitpoints) this._hitpoints = 10 + abilityModifier(this.constitution);
    return this._hitpoints;
  }
}
