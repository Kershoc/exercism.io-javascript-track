const DNA2RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = (input) => {
  return [...input].map((c) => (DNA2RNA[c]) ? DNA2RNA[c] : c).join('');
};
