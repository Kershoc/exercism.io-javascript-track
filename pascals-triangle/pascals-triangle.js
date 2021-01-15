
export const rows = (rowCount) => {
  let triangle = [];
  for (let line = 1; line <= rowCount; line++) {
    let row = [];
    let Cline = 1; //represents C(line, i)
    for (let i = 1; i <= line; i++) {
      row.push(Cline);
      Cline = Cline * (line - i) / i;
    }
    triangle.push(row);
  }
  return triangle;
};
