export const isArmstrongNumber = (subject) => {
  let power = Math.ceil(Math.log10(subject));
  let clone = subject;
  let res = 0;
  while (clone > 0) {
    res += (clone % 10) ** power;
    clone = Math.floor(clone / 10);
  }
  return res === subject;
};
