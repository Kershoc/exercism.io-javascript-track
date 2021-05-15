
export const score = (dice, category) => {
  return categoryFn[category](dice);
};

const categoryFn = {
  'yacht': (dice) => (new Set(dice).size === 1) ? 50 : 0,
  'ones': (dice) => categoryFn.singles(dice, 1),
  'twos': (dice) => categoryFn.singles(dice, 2),
  'threes': (dice) => categoryFn.singles(dice, 3),
  'fours': (dice) => categoryFn.singles(dice, 4),
  'fives': (dice) => categoryFn.singles(dice, 5),
  'sixes': (dice) => categoryFn.singles(dice, 6),
  'little straight': (dice) => categoryFn.straight(dice, 1),
  'big straight': (dice) => categoryFn.straight(dice, 2),
  'straight': (dice, start) => (dice.sort().every(e => e == start++)) ? 30 : 0,
  'choice': (dice) => categoryFn.sum(dice),
  'sum': (dice) => dice.reduce((out, elm) => out + elm, 0),
  'singles': (dice, num) => dice.filter(e => e === num).length * num,

  'full house': (dice) => {
    const counts = categoryFn.getCounts(dice);
    return ( counts.size === 2 && [...counts.values()].includes(3)) ? categoryFn.sum(dice) : 0;
  },

  'four of a kind': (dice) => {
    const rCounts = new Map(Array.from(categoryFn.getCounts(dice), a => a.reverse()));
    return (rCounts.has(4) || rCounts.has(5)) ? (rCounts.get(4) ?? rCounts.get(5)) * 4 : 0;
  },

  'getCounts': (dice) => {
    const counts = new Map();
    dice.forEach(e => counts.has(e) ? counts.set(e, counts.get(e)+1) : counts.set(e,1));
    return counts;
  }
}
