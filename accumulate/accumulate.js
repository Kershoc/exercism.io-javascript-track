// Restrictions
// Keep your hands off that collect/map/fmap/whatchamacallit functionality
// provided by your standard library! Solve this one yourself using other
// basic tools instead.
export const accumulate = (list, fn) => {
  const out = [];
  for (const item of list) {
    out.push(fn(item));
  }
  return out;
};
