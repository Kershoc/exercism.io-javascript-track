export const squareRoot = (radicand) => {
  let out = 0;
  let bit = 1 << 30;

  while (bit > radicand)
    bit >>= 2;

  while (bit != 0) {
    if (radicand >= out + bit) {
      radicand -= out + bit;
      out = (out >> 1) + bit;
    } else {
      out >>= 1;
    }
    bit >>= 2;
  }
  return out;
};
