export const rows = (endLetter) => {
  const range = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  if (!range.includes(endLetter)) {
    throw new Error('Single letter A-Z please');
  }
  let output = [];
  const letters = range.slice(range.indexOf('A'), range.indexOf(endLetter) + 1);
  const midPoint = letters.length;
  let i = 1;
  let cpCount = -1;
  for (const letter of letters) {
    const pad = ' '.repeat(midPoint - i);
    const cPad = ' '.repeat((cpCount < 0) ? 1 : cpCount);
    output.push(
      (i > 1) ? pad + letter + cPad + letter + pad : pad + letter + pad
    );
    i++;
    cpCount += 2;
  }
  let tail = [...output].reverse();
  tail.shift();
  return [...output, ...tail];
};
