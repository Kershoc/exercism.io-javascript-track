export const score = (x, y) => {
  let hit = x**2 + y**2;
  if (hit <= Rings.Inner) return Points.Inner;
  if (hit <= Rings.Middle) return Points.Middle;
  if (hit <= Rings.Outer) return Points.Outer;
  return Points.Miss;
};

const Rings = {
  Inner: 1**2,
  Middle: 5**2,
  Outer: 10**2
}

const Points = {
  Inner: 10,
  Middle: 5,
  Outer: 1,
  Miss: 0
}
