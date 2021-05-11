export const primes = (upperBound) => {
  if (upperBound < 2) return [];
  let range = [...Array(upperBound + 1).keys()].splice(2);
  return range.reduce((range, number) => {
    return range.filter((value) => (value <= number) ? true : (value % number === 0) ? false : true );
  }, range);
};
