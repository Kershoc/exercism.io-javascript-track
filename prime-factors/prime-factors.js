export const primeFactors = (number) => {
  let divisor = 2;
  let output = [];
  while (number > 1) {
    if (number % divisor === 0) {
      output.push(divisor);
      number /= divisor;
    } else {
      divisor++;
    }
  }
  return output;
}
