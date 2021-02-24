export const keep = (list, fn) => {
  let out = [];
  for (const item of list) {
    if (fn(item)) {
      out.push(item);
    }
  }
  return out;
};

export const discard = (list, fn) => {
  let out = [];
  for (const item of list) {
    if (!fn(item)) {
      out.push(item);
    }
  }
  return out;
};
