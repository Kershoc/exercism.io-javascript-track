
export const rows = (rowCount) => {
  return [...new Array(rowCount)].map((_, idx) => {
    const line = idx + 1;
    let Cline = 1; //represents C(line, i)
    return [...new Array(line)].map((_, rIdx) => {
      const current = Cline;
      const i = rIdx + 1;
      Cline = Cline * (line - i) / i;
      return current;
    });
  });
};
