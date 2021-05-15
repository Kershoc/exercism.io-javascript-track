
export const score = (dice, category) => {
  return categoryFn[category](dice);
};

const categoryFn = {
  'yacht': (dice) => {
    const set = new Set(dice);
    return (set.size === 1) ? 50 : 0
  },

  'ones': (dice) => {
    return categoryFn.singles(dice, 1)
  },

  'twos': (dice) => {
    return categoryFn.singles(dice, 2)
  },

  'threes': (dice) => {
    return categoryFn.singles(dice, 3)
  },

  'fours': (dice) => {
    return categoryFn.singles(dice, 4)
  },

  'fives': (dice) => {
    return categoryFn.singles(dice, 5)
  },

  'sixes': (dice) => {
    return categoryFn.singles(dice, 6)
  },

  'singles': (dice, num) => {
    return dice.filter(e => e === num).length * num
  },

  'full house': (dice) => {
    const counts = categoryFn.getCounts(dice);
    if ( counts.size === 2 && [...counts.values()].includes(3)) {
      return categoryFn.sum(dice);
    }
    return 0;
  },

  'four of a kind': (dice) => {
    const counts = categoryFn.getCounts(dice);
    const reversedCounts = new Map(Array.from(counts, a => a.reverse()));
    if ( reversedCounts.has(4) || reversedCounts.has(5) ) {
      return (reversedCounts.has(4) ? reversedCounts.get(4) : reversedCounts.get(5)) * 4;
    }
    return 0;
  },

  'little straight': (dice) => {
    return categoryFn.straight(dice, 1);
  },

  'big straight': (dice) => {
    return categoryFn.straight(dice, 2);
  },

  'straight': (dice, start) => {
    if (dice.sort().every(e => e == start++)) return 30;
    return 0;
  },

  'choice': (dice) => {
    return categoryFn.sum(dice);
  },

  'sum': (dice) => {
    return dice.reduce((out, elm) => out + elm, 0);
  },

  'getCounts': (dice) => {
    const counts = new Map();
    dice.forEach(e => counts.has(e) ? counts.set(e, counts.get(e)+1) : counts.set(e,1));
    return counts;
  }
}
