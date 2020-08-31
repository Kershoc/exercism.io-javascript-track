export const compute = (lstrand, rstrand) => {
  if (lstrand.length === 0 && rstrand.length !== 0) {
    throw new Error("left strand must not be empty");
  }
  if (rstrand.length === 0 && lstrand.length !== 0) {
    throw new Error("right strand must not be empty");
  }
  if (lstrand.length !== rstrand.length) {
    throw new Error("left and right strands must be of equal length");
  }
  return [...lstrand].reduce( (count, c, i) => (c !== rstrand[i])?++count:count , 0);
};
