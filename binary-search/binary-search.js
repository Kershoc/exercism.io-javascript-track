export const find = (haystack, needle) => {
  let minIdx = 0;
  let maxIdx = haystack.length - 1;
  let curIdx;
  while (minIdx <= maxIdx) {
    curIdx = Math.floor((minIdx + maxIdx) / 2);
    if (haystack[curIdx] === needle) return curIdx;
    if (needle < haystack[curIdx]) maxIdx = curIdx - 1;
    if (needle > haystack[curIdx]) minIdx = curIdx + 1;
  }
  throw new Error('Value not in array');
};
