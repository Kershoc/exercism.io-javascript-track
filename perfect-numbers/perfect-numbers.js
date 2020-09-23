export const classify = (number) => {
  if (number < 1) throw new Error('Classification is only possible for natural numbers.');

  let aliquotSum = 1;

  for (let i = 2; i ** 2 < number; i++) {
    if (number % i == 0) aliquotSum += i + number / i;
  }

  if (aliquotSum == number && aliquotSum != 1) return 'perfect';
  if (aliquotSum > number) return 'abundant';
  return 'deficient';
};
