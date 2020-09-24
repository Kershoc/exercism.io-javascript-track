export const isIsogram = (word) => {
  const letters = [...word.toLowerCase().replace(/[\s-]+/g, '')];
  return letters.length == new Set(letters).size;
};
