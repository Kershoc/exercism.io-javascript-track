export const encode = (input) => {
  let output = '';
  if (input.length == 0) return output;

  let last = '';
  let count = 0;
  for (let rune of input) {
    if (rune != last) {
      if (count > 1) output += count.toString();
      output += last;
      count = 0;
    }
    last = rune;
    count++;
  };
  if (count > 1) output += count.toString();
  output += last;
  return output;
};

export const decode = (input) => {
  let output = '';
  if (input.length == 0) return output;

  let count = '';

  for (let rune of input) {
    if (!isNaN(rune) && rune != ' ') {
      count += rune;
      continue;
    }
    let c = parseInt(count);
    if (isNaN(c)) c = 1;
    output += rune.repeat(c);
    count = '';
  };

  return output;
};
