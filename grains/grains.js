export const square = (slotNumber) => {
  if (slotNumber < 1 || slotNumber > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return 1n << (BigInt(slotNumber) - 1n);
};

export const total = () => {
  return (1n << 64n) - 1n;
};
