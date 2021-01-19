export const isValid = (input) => {
  input = input.replace(/-/g, '');
  if (input.length != 10) {
    return false;
  }
  let sum = 0;
  for (const [idx, char] of [...input].entries()) {
    if (idx == 9 && char == 'X') {
      sum += 10;
      continue;
    }
    if (char < 0 || char > 9) {
      return false;
    }
    sum += char * (10 - idx);
  }
  return sum % 11 == 0;
};
