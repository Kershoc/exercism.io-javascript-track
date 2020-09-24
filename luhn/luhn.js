export const valid = (input) => {
  const ccnum = input.replace(/\s/g, '');

  if (ccnum.length <= 1) return false;

  let shouldDouble = ccnum.length % 2 == 0;
  let sum = 0;

  for (let digit of [...ccnum]) {
    digit = parseInt(digit);
    if (isNaN(digit)) return false;
    if (shouldDouble) ((digit *= 2) > 9) ? digit -= 9 : digit;
    sum += digit;
    shouldDouble = !shouldDouble;
  };
  return sum % 10 == 0;
};
