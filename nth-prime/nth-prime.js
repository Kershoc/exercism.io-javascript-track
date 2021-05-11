const isPrime = (num) => {
  if (num < 2) return false;
  if (num < 4) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i ** 2 <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

export const prime = (nthPrime) => {
  if (nthPrime < 1) {
    throw new Error('there is no zeroth prime');
  }
  let next = 1;
  while (nthPrime > 0) {
    next++;
    if (isPrime(next)) nthPrime--;
  }
  return next;
};
