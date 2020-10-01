const BRACKETS = { '[': ']', '{': '}', '(': ')' };

export const isPaired = (input) => {
  let nest = [];
  for (const char of [...input]) {
    switch (true) {
      case Object.keys(BRACKETS).includes(char):
        nest.push(char);
        break;

      case Object.values(BRACKETS).includes(char):
        const check = nest.pop();
        if (!check || BRACKETS[check] !== char) return false;
        break;
    }

  }
  return nest.length == 0;
};
