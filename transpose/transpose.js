export const transpose = (input) => {
  const longestLength = input.reduce((len, row) => (row.length > len) ? row.length : len, 0);
  let transposed = Array.from({ length: longestLength }, () => []);
  for (const row of input) {
    const paddedRow = row.padEnd(longestLength, ' ');
    for (const [key, value] of [...paddedRow.split('')].entries()) {
      transposed[key].push(value);
    }
  }
  transposed = transposed.map((a) => a.join(''));
  if (transposed[transposed.length - 1]) {
    transposed[transposed.length - 1] = transposed[transposed.length - 1].trimRight();
  }
  return transposed;
};
